import { EntityRepository, Repository } from "typeorm";
import { Account } from "../../domain/entities/Accounts";

@EntityRepository(Account)
export class PostgresAccountRepository extends Repository<Account> {}
