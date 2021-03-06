import { getCustomRepository } from "typeorm";
import { PostgresGoalRepository } from "../../infra/repositories/PostgresGoalRepository";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { Goal } from "../entities/Goal";

export class GetGoals {
  async execute(patient_id: string): Promise<Goal[]>{
    const postgresGoalRepository = getCustomRepository(PostgresGoalRepository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await postgresPatientRepository.findOne({ id: patient_id });

    if(!patientExists){
      throw new Error('This patient does not exists!');
    }

    const goals = await postgresGoalRepository.find({
      where: { patient_id: patient_id }
    });

    return goals;
  }
}
