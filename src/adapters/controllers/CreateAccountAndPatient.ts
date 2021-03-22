import { Request, Response } from "express";
import { CreateAccount } from "../../domain/UseCases/CreateAccont";
import { CreatePatient } from "../../domain/UseCases/CreatePatient";

export class CreateAccountAndPatient {
  private createAccountUseCase;
  private createPatientUseCase;

  constructor (createAccountUseCase: CreateAccount, createPatientUseCase: CreatePatient){
    this.createAccountUseCase = createAccountUseCase;
    this.createPatientUseCase = createPatientUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const { email, password, ...rest } = request.body;

      const account = await this.createAccountUseCase.execute({
        email,
        password
      });

      const patient = await this.createPatientUseCase.execute({
        account_id: account.id,
        ...rest
      });

      return response.status(201).json({account, patient});
    } catch (error) {
      return response.status(400).json({
        error: error.message || 'Unexpected error!'
      })
    }
  }
}
