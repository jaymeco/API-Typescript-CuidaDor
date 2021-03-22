import { getCustomRepository } from "typeorm";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { ICreatePatientRequestDTO } from "../DTOs/CreatePatient";
import { Patient } from "../entities/Patient";

export class CreatePatient {
  async execute(data: ICreatePatientRequestDTO): Promise<Patient> {
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await postgresPatientRepository.findOne({ account_id: data.account_id });

    if(patientExists){
      throw new Error('This patient already exists!');
    }

    const patient = postgresPatientRepository.create(data);

    return await postgresPatientRepository.save(patient);
  }
}
