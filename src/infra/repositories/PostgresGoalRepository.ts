import { EntityRepository, Repository } from "typeorm";
import { Goal } from "../../domain/entities/Goal";

@EntityRepository(Goal)
export class PostgresGoalRepository extends Repository<Goal>{}
