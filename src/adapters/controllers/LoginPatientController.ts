import { Request, Response } from "express";
import { LoginPatient } from "../../domain/UseCases/LoginPatient";

export class LoginPatientController {
  private loginPatientUseCase;

  constructor (loginPatientUseCase: LoginPatient) {
    this.loginPatientUseCase = loginPatientUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const data = await this.loginPatientUseCase.execute({ email ,password });

      return response.status(200).json(data);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      });
    }
  }
}
