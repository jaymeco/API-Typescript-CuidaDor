import { getCustomRepository } from "typeorm";
import { PostgresDailyAssessmentRespository } from "../../infra/repositories/PostgresDailyAssessment";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";

export class GetLastAccess {
  async execute(patient_id: string): Promise<string> {
    const postgresDailyAssessmentRepository = getCustomRepository(PostgresDailyAssessmentRespository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await postgresPatientRepository.findOne({ id: patient_id });

    if (!patientExists) {
      throw new Error('Esse paciente não existe!');
    }

    const lastDaily = await postgresDailyAssessmentRepository.find({
      order: {
        created_at: 'DESC',
      },
      take: 1,
    })

    return new Date(lastDaily[0].created_at).toISOString();
  }
}
