import { getCustomRepository } from "typeorm";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { PostgresProfessionalPatientRepository } from "../../infra/repositories/PostgresProfessionalPatientRepository";
import { ProfessionalPatient } from "../entities/ProfessionalPatient";

export class GetProfessionalByPatients {
  async execute(id: string): Promise<ProfessionalPatient[]> {
    const postgresProfessionalPatientRepository = getCustomRepository(PostgresProfessionalPatientRepository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await postgresPatientRepository.findOne({ id });

    if(!patientExists){
      throw new Error('Esse paciente não existe!');
    }

    const professionals = postgresProfessionalPatientRepository.find({
      where: { patient_id: id },
      relations: ['professionals'],
    });

    return professionals;
  }
}
