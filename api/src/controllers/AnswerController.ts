import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

// http://localhost:3333/answers/1?u=17d10d89-2041-417e-88f0-9b27097ac1bb
//Route params => Parâmetros que compõe a rota Ex: (routes.get("/answers/:value"))

/*Query params => Parâmetros que são utilizados na busca, filtro, paginação, e não são obrigatórios.
                  São compostos por ?chave=valor*/


class AnswerController {
  async execute(request: Request, response: Response) {
      const {value} = request.params;
      const {u} = request.query;

      const surveysUsersRepository= getCustomRepository(SurveysUsersRepository)

      const surveyUser = await surveysUsersRepository.findOne({
          id: String(u)
      })

      if(!surveyUser){
          //return response.status(400).json({error: 'Survey User does not exist!'})
          throw new AppError('Survey User does not exist!')
      }

      surveyUser.value = Number(value)

      await surveysUsersRepository.save(surveyUser)

      return response.json(surveyUser)
  }
}

export { AnswerController };
