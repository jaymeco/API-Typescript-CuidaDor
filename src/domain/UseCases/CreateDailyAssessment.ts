import { getCustomRepository } from "typeorm";
import { PostgresDailyAssessmentRespository } from "../../infra/repositories/PostgresDailyAssessment";
import { CreateDailyAssessmentRequestDTO } from "../DTOs/CreateDailyAssessment";

export class CreateDailyAssessment {
  async execute (data: CreateDailyAssessmentRequestDTO): Promise<void> {
    const postgresDailyAssessmentRepository = getCustomRepository(PostgresDailyAssessmentRespository);

    const dailyAssessment = postgresDailyAssessmentRepository.create(data);

    await postgresDailyAssessmentRepository.save(dailyAssessment);
  }
}
