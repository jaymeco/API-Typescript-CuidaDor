import { Request, Response } from "express";
import { GetProfessionalByPatients } from "../../domain/UseCases/GetProfessionalsByPatients";

export class GetProfessionalsByPatientsController {
  private getProfessionalsByPatientUseCase;

  constructor(getProfessionalsByPatientUseCase: GetProfessionalByPatients) {
    this.getProfessionalsByPatientUseCase = getProfessionalsByPatientUseCase;
  }

  async handle(request: Request, response: Response ): Promise<Response> {
    try {
      const { id } = request.params;

      const professionals = this.getProfessionalsByPatientUseCase.execute(id);

      return response.status(200).json(professionals);
    } catch (error) {
      return response.status(400).json({
        message: error.message
      });
    }
  }
}
