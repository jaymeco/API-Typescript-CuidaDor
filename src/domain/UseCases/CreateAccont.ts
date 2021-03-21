import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import hashpassword from "../../infra/utils/hashpassword";
import { ICreateAccountRequestDTO } from "../DTOs/CreateAccount";
import { Account } from "../entities/account";

export class CreateAccount {
  private accountRepository;

  constructor (accountRepository: PostgresAccountRepository){
    this.accountRepository = accountRepository;
  }

  async execute(data: ICreateAccountRequestDTO): Promise<Account> {
    const accountExists = await this.accountRepository.findOne({ email: data.email });

    if(accountExists){
      throw new Error('This account already exists!');
    }
    data.password = await hashpassword(data.password);
    const account = this.accountRepository.create({
      email: data.email,
      password: data.password
    });

    return await this.accountRepository.save(account);
  }
}
