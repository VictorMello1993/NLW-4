import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

// Cálculo de NPS
/* Tipos de notas:
Detratores => 0 - 6
Passivos => 7 - 8
Promotoras => 9 - 10

NPS = (nº de promotores - nº de detratores) / (nº de usuários) * 100
*/

class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveysUsers = await surveysUsersRepository.find({ survey_id, value: Not(IsNull()) });

    const detractors = surveysUsers.filter((survey) => survey.value >= 0 && survey.value <= 6).length;
    const promoters = surveysUsers.filter(  (survey) => survey.value >= 9 && survey.value <= 10).length;
    const passive = surveysUsers.filter(  (survey) => survey.value >= 7 && survey.value <= 8).length;

    const totalAnswered = surveysUsers.length;
    const result = Number(((promoters - detractors) / totalAnswered) * 100).toFixed(2)

    return response.json({
      detractors,
      promoters,
      passive,
      totalAnswered,
      nps: result,
    });
  }
}

export { NpsController };
