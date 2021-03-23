import { Request, Response } from "express";
import { CreateAccount } from "../../domain/UseCases/CreateAccont";
import { CreateProfessional } from "../../domain/UseCases/CreateProfessional";

export class CreateAccountAndProfessional {
  private createAccountUseCase;
  private createProfessionalUseCase;

  constructor (createAccountUseCase: CreateAccount, createProfessionalUseCase: CreateProfessional) {
    this.createAccountUseCase = createAccountUseCase;
    this.createProfessionalUseCase = createProfessionalUseCase;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const { email, password, ...rest } = request.body;

      const account = await this.createAccountUseCase.execute({ email, password });

      const professional = await this.createProfessionalUseCase.execute({
        account_id: account.id,
        ...rest
      });

      return response.status(201).json({ account, professional });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      });
    }
  }
}
