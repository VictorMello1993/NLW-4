import { resolve } from 'path';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import {Request, Response} from 'express'
import SendMailService from '../services/SendMailService';

class SendMailController{
    async execute(request: Request, response: Response){
        const{email, survey_id} = request.body

        const usersRepository = getCustomRepository(UsersRepository)
        const surveysRepository = getCustomRepository(SurveysRepository)
        const surveysUserRepository = getCustomRepository(SurveysUsersRepository)

        const user = await usersRepository.findOne({email})

        if(!user){
            return response.status(400).json({error: 'User does not exist!'})
        }

        const survey = await surveysRepository.findOne({id: survey_id})

        if(!survey){
            return response.status(400).json({error: 'Survey does not exist!'})
        }

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            user_id: user.id,
            link: process.env.URL_MAIL //Variável de ambiente
        }

        const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsmail.hbs')

        const surveyUserAlreadyExists = await surveysUserRepository.findOne({
            where: [{user_id: user.id}, {value: null}],
            relations: ['user', 'survey']
        })

        if(surveyUserAlreadyExists){
            await SendMailService.execute(email, survey.title, variables, npsPath)
            return response.json(surveyUserAlreadyExists)
        }

        //Salvar as informações na tabela surveys_users
        const surveyUser = surveysUserRepository.create({user_id: user.id, survey_id})

        await surveysUserRepository.save(surveyUser)
        
        //Enviar e-mail para o usuário        
        await SendMailService.execute(email, survey.title, variables, npsPath)

        return response.json(surveyUser)
    }
}

export{SendMailController}