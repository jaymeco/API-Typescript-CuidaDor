import { getCustomRepository } from "typeorm";
import { PostgresProfessionalPatientRepository } from "../../infra/repositories/PostgresProfessionalPatientRepository";
import { Professional } from "../entities/Professional";

export class GetUsersOnChat {
  public async execute(
    chat_room: string,
  ): Promise<Professional[]> {
    const repository = getCustomRepository(PostgresProfessionalPatientRepository);

    const chatExists = await repository.count({ patient_id: chat_room });

    if (!chatExists) {
      throw new Error('Esse chat não existe!');
    }

    // Identificar a sala envida
    // Listar os membros dessa sala ->

    const professionals = await repository.find({
      join: {
        alias: 'ProfessionalPatient',
        innerJoinAndSelect: { professional: 'ProfessionalPatient.professional' },
      },
      where: {
        patient_id: chat_room,
      }
    });

    const users = professionals.map((professional) => professional.professional);

    return users;
  }
}
