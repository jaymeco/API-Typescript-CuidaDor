import { getCustomRepository } from "typeorm";
import { PostgresGoalRepository } from "../../infra/repositories/PostgresGoalRepository";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { Goal } from "../entities/Goal";
import { Patient } from "../entities/Patient";

export class GetPatient {
  async execute(patient_id: string): Promise<Patient>{
    const postgresGoalRepository = getCustomRepository(PostgresGoalRepository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await postgresPatientRepository.findOne({ id: patient_id });

    if(!patientExists){
      throw new Error('This patient does not exists!');
    }


    return patientExists;
  }
}
