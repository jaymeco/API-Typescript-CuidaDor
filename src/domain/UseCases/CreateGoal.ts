import { getCustomRepository } from "typeorm";
import { PostgresGoalRepository } from "../../infra/repositories/PostgresGoalRepository";
import { ICreateGoalRequestDTO } from "../DTOs/CreateGoal";
import { Goal } from '../entities/Goal';

export class CreateGoal {
  async execute(data: ICreateGoalRequestDTO): Promise<Goal>{
    const postgresGoalRepository = getCustomRepository(PostgresGoalRepository);

    const goal = postgresGoalRepository.create(data);

    return await postgresGoalRepository.save(goal);
  }
}
