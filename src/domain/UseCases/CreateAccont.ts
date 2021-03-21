import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import hashpassword from "../../infra/utils/hashpassword";
import { Account } from "../entities/account";

export class CreateAccount {
  private accountRepository;

  constructor (accountRepository: PostgresAccountRepository){
    this.accountRepository = accountRepository;
  }

  async execute(email: string, password: string): Promise<Account> {
    const accountExists = await this.accountRepository.findOne({ email });

    if(accountExists){
      throw new Error('This account already exists!');
    }
    password = await hashpassword(password);
    const account = this.accountRepository.create({
      email: email,
      password: password
    });

    return await this.accountRepository.save(account);
  }
}
