import { getCustomRepository } from "typeorm";
import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import { PostgresPainEducationRepository } from "../../infra/repositories/PostgresPainEducationRepository";
import { IPainEducationRequestDTO } from "../DTOs/CreatePainEducation";

export class CreatePainEducation {
  async execute(data: IPainEducationRequestDTO): Promise<void>{
    const postgresPainEducationRepository = getCustomRepository(PostgresPainEducationRepository);

    const news = postgresPainEducationRepository.create(data);

    await postgresPainEducationRepository.save(news);
  }
}
