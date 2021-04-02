import { getCustomRepository } from "typeorm";
import { PostgresGoalRepository } from "../../infra/repositories/PostgresGoalRepository";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { PostgresProfessionalPatientRepository } from "../../infra/repositories/PostgresProfessionalPatientRepository";
import { PostgresProfessionalRepository } from "../../infra/repositories/PostgresProfessionalRepository";
import { ICreateGoalRequestDTO } from "../DTOs/CreateGoal";
import { Goal } from '../entities/Goal';

export class CreateGoal {
  async execute(data: ICreateGoalRequestDTO): Promise<Goal>{
    const postgresGoalRepository = getCustomRepository(PostgresGoalRepository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);
    const postgresProfessionalRepository = getCustomRepository(PostgresProfessionalRepository);
    const postgresProfessionalPatient = getCustomRepository(PostgresProfessionalPatientRepository);

    const professionalExists = postgresProfessionalRepository.findOne({ id: data.professional_id });
    if(!professionalExists){
      throw new Error('This professional does not exists!');
    }

    const patientExists = postgresPatientRepository.findOne({ id: data.patient_id });
    if(!patientExists){
      throw new Error('This patient does not exists!');
    }

    const professionalPatientExists = postgresProfessionalPatient.findOne({
      patient_id: data.patient_id,
      professional_id: data.professional_id
    });
    if(!professionalPatientExists){
      throw new Error('This conection does not exists!');
    }

    const goal = postgresGoalRepository.create(data);

    return await postgresGoalRepository.save(goal);
  }
}
