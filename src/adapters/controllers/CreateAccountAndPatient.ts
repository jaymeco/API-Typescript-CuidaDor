import { Request, Response } from "express";
import { CreateAccount } from "../../domain/UseCases/CreateAccont";

export class CreateAccountAndPatient {
  private createAccountUseCase;

  constructor (createAccountUseCase: CreateAccount){
    this.createAccountUseCase = createAccountUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const { email, password } = request.body;

      const account = await this.createAccountUseCase.execute({
        email
        password
      });

      return response.status(201).json(account);
    } catch (error) {
      return response.status(400).json({
        error: error.message || 'Unexpected error!'
      })
    }
  }
}
