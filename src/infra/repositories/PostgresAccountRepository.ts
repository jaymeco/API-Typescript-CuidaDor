import { EntityRepository, Repository } from "typeorm";
import { Account } from "../../domain/entities/account";

@EntityRepository(Account)
export class PostgresAccountRepository extends Repository<Account> {}
