import { EntityRepository, Repository } from "typeorm";
import { Accounts } from "../../domain/entities/Accounts";

@EntityRepository(Accounts)
export class PostgresAccountRepository extends Repository<Accounts> {}
