import { getCustomRepository } from "typeorm";
import { PostgresPainEducationRepository } from "../../infra/repositories/PostgresPainEducationRepository";
import { PainEducation } from "../entities/PainEducation";

export class GetAllPainEducation {
  async execute(): Promise<PainEducation[]>{
    const postgresPainEducation = getCustomRepository(PostgresPainEducationRepository);

    const news = await postgresPainEducation.find();

    return news;
  }
}
