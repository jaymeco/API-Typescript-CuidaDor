import { getCustomRepository } from "typeorm";
import { PostgresProfessionalPatientRepository } from "../../infra/repositories/PostgresProfessionalPatientRepository";
import { PostgresProfessionalRepository } from "../../infra/repositories/PostgresProfessionalRepository";
import { ProfessionalPatient } from "../entities/ProfessionalPatient";

export class GetPatientsByProfessionals {
  async execute(id: string): Promise<ProfessionalPatient[]> {
    const postgresProfessionalPatientRepository = getCustomRepository(PostgresProfessionalPatientRepository);
    const postgresProfessionalRepository = getCustomRepository(PostgresProfessionalRepository);

    const professionalExists = await postgresProfessionalRepository.findOne({ id });

    if(!professionalExists){
      throw new Error(`Esse profissional não existe!`);
    }

    const patients = await postgresProfessionalPatientRepository.find({
      where: { professional_id: id },
      relations: ['patient'],
    });

    return patients;
  }
}
