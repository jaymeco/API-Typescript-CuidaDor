import { Request, Response } from "express";
import { LoginProfessional } from '../../domain/UseCases/LoginProfessional';

export class LoginProfessionalController {
  private loginProfessionalUseCase;

  constructor (loginProfessionalUseCase: LoginProfessional) {
    this.loginProfessionalUseCase = loginProfessionalUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const data = await this.loginProfessionalUseCase.execute({ email, password });

      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      });
    }
  }
}
