import { getCustomRepository } from "typeorm";
import { PostgresProfessionalPatientRepository } from "../../infra/repositories/PostgresProfessionalPatientRepository";
import { PostgresProfessionalRepository } from "../../infra/repositories/PostgresProfessionalRepository";

export class GetChats {
  async execute(professional_id: string): Promise<any> {
    const repository = getCustomRepository(PostgresProfessionalRepository);
    const relationRepository = getCustomRepository(PostgresProfessionalPatientRepository);

    const professionalExists = await repository.count({ id: professional_id });

    if (!professionalExists) {
      throw new Error('Esse profissional não existe!');
    }

    const brutChats = await relationRepository.find({
      select: ['id'],
      join: {
        alias: 'ProfessionalPatient',
        leftJoinAndSelect: { patient: 'ProfessionalPatient.patient' },
      },
      where: { professional_id }
    });

    const chats = brutChats.map((chat) => {
      return {
        id: chat.patient.id,
        chatName: `${chat.patient.first_name} ${chat.patient.last_name}`,
        chatAvatar: chat.patient.avatar,
      };
    });

    return chats;
  }
}
