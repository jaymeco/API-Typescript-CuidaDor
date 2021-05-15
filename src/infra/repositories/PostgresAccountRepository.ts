import { EntityRepository, Repository } from "typeorm";
import { Account } from "../../domain/entities/Account";

@EntityRepository(Account)
export class PostgresAccountRepository extends Repository<Account> {}
