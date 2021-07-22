import { getCustomRepository } from "typeorm";
import { PostgresDailyAssessmentRespository } from "../../infra/repositories/PostgresDailyAssessment";

export class GetAccessPatient {

  async execute(id: string): Promise<number> {
    const postgresDailyAssessmentRepository = getCustomRepository(PostgresDailyAssessmentRespository);

    const dailiesAssessments = await postgresDailyAssessmentRepository.count({
      patient_id: id
    });

    return dailiesAssessments;
  }
}
