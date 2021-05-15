import { getCustomRepository } from "typeorm";
import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import hashpassword from "../../infra/utils/hashpassword";
import { ICreateAccountRequestDTO } from "../DTOs/CreateAccount";
import { Account } from "../entities/Accounts";

export class CreateAccount {

  async execute(data: ICreateAccountRequestDTO): Promise<Account> {
    const postgresAccountRepository = getCustomRepository(PostgresAccountRepository);
    const accountExists = await postgresAccountRepository.findOne({ email: data.email });

    if(accountExists){
      throw new Error('This account already exists!');
    }

    data.password = await hashpassword(data.password);
    const account = postgresAccountRepository.create({
      email: data.email,
      password: data.password
    });

    return await postgresAccountRepository.save(account);
  }
}
