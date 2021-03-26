import { Request, Response } from "express";
import { ConectProfessionalWithPatient } from "../../domain/UseCases/ConectProfessionalWithPatient";

export class ConectProfessionalWithPatientController {
  private conectPatientWithProssionalUseCase;

  constructor (conectPatientWithProssionalUseCase: ConectProfessionalWithPatient){
    this.conectPatientWithProssionalUseCase = conectPatientWithProssionalUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id, email } = request.body;

      const data = await this.conectPatientWithProssionalUseCase.execute({ id, email });

      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpectd error!'
      });
    }
  }
}
