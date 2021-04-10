import { getCustomRepository } from "typeorm";
import { PostgresGoalRepository } from "../../infra/repositories/PostgresGoalRepository";

export class CheckGoals {
  async execute(checked: boolean, id: string): Promise<void>{
    const postgresGoalsRepository = getCustomRepository(PostgresGoalRepository);

    const goalExists = await postgresGoalsRepository.findOne({ id });

    if(!goalExists){
      throw new Error('Essa meta não existe!');
    }

    await postgresGoalsRepository.update(id, {
      checked
    });
  }
}
