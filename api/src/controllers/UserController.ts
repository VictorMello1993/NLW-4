import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import * as yup from 'yup'
import { AppError } from '../errors/AppError';

class UserController{
    async create(request: Request, response: Response) {
        const {name, email} = request.body

        //Criando um escopo de validação da biblioteca yup
        const schema = yup.object().shape({
            name: yup.string().required('Nome é obrigatório'),
            email: yup.string().email().required('Email incorreto')
        })

        //Validação forma 1
        // if(!await schema.isValid(request.body)){
        //     return response.status(400).json({error: 'Validation failed!'})
        // }

        //Validação forma 2
        try {
            await schema.validate(request.body, {abortEarly: false})
        } catch (error) {
            // return response.status(400).json({error})
            throw new AppError(error)
        }

        const usersRepository = getCustomRepository(UsersRepository)

        const userAlreadyExists = await usersRepository.findOne({email})

        //Validação de usuário existente por e-mail
        if(userAlreadyExists){
            // return response.status(400).json({ //ERRO 400 - BAD REQUEST, típico em requisições POST
            //     error: "User already exists!"
            // })
            throw new AppError('User already exists!')
        }

        const user = usersRepository.create({name, email})

        await usersRepository.save(user)

        return response.status(201).json(user)
    }

    async show (request: Request, response: Response){
        const usersRepository = getCustomRepository(UsersRepository)
        const all = await usersRepository.find()
        
        return response.json(all)
    }
}

export { UserController };
