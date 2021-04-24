import { getCustomRepository } from "typeorm";
import { PostgresDailyAssessmentRespository } from "../../infra/repositories/PostgresDailyAssessment";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";

export class GetGraphicThreeValues {
  async execute(patient_id: string): Promise<Object[]> {
    const dailyAssessmentRepository = getCustomRepository(PostgresDailyAssessmentRespository);
    const patientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await patientRepository.findOne({ id: patient_id });

    if (!patientExists) {
      throw new Error('This patient does not exists!');
    }

    const dailies = await dailyAssessmentRepository.find({
      patient_id
    });

    return dailies;

  }
}
