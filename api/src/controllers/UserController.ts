import {Request, Response} from 'express';
import {getRepository} from 'typeorm'
import {User} from '../models/User'

class UserController{
    async create(request: Request, response: Response) {
        const {name, email} = request.body

        const usersRepository = getRepository(User)

        //Validação de usuário existente por e-mail
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if(userAlreadyExists){
            return response.status(400).json({ //ERRO 400 - BAD REQUEST, típico em requisições POST
                error: "User already exists!"
            })
        }

        const user = usersRepository.create({name, email})

        await usersRepository.save(user)

        return response.json(user)
    }
}

export{UserController}