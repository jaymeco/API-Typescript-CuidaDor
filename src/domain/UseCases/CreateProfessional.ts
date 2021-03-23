import { getCustomRepository } from "typeorm";
import { PostgresProfessionalRepository } from "../../infra/repositories/PostgresProfessionalRepository";
import { ICreateProfessionalRequestDTO } from "../DTOs/CreateProfessional";
import { Professional } from "../entities/Professional";

export class CreateProfessional {
  async execute(data: ICreateProfessionalRequestDTO): Promise<Professional>{
    const postgresProfessionalRepository = getCustomRepository(PostgresProfessionalRepository);

    const professionalExists = await postgresProfessionalRepository.findOne({ account_id: data.account_id });

    if(professionalExists){
      throw new Error('This professional already exists!');
    }

    const professional = postgresProfessionalRepository.create(data);

    return await postgresProfessionalRepository.save(professional);
  }
}
