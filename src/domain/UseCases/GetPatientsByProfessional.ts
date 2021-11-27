import { getCustomRepository, ILike } from "typeorm";
import { PostgresProfessionalPatientRepository } from "../../infra/repositories/PostgresProfessionalPatientRepository";
import { PostgresProfessionalRepository } from "../../infra/repositories/PostgresProfessionalRepository";
import { ListFilters } from "../DTOs/ListFilters";
import { ProfessionalPatient } from "../entities/ProfessionalPatient";

export class GetPatientsByProfessionals {
  async execute(id: string, filters?: ListFilters): Promise<ProfessionalPatient[]> {
    const postgresProfessionalPatientRepository = getCustomRepository(PostgresProfessionalPatientRepository);
    const postgresProfessionalRepository = getCustomRepository(PostgresProfessionalRepository);

    const professionalExists = await postgresProfessionalRepository.findOne({ id });

    if (!professionalExists) {
      throw new Error(`Esse profissional não existe!`);
    }

    const patients = await postgresProfessionalPatientRepository.find({
      select: ['id'],
      join: {
        alias: 'ProfessionalPatient',
        innerJoinAndSelect: { patient: 'ProfessionalPatient.patient' },
      },
      where: (qb: any) => {
        qb.where({
          professional_id: id,
        }).andWhere('first_name ILIKE :filter', { filter: `%${filters?.nome}%` })
          .orWhere('last_name ILIKE :filter', { filter: `%${filters?.nome}%` })
          .orWhere('first_name ILIKE :filter', { filter: `${filters?.orderBy}%` });
      },
    });
    console.log(filters?.nome);
    return patients;
  }
}
