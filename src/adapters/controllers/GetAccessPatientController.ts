import { Request, Response } from "express";
import { GetAccessPatient } from "../../domain/UseCases/GetAccessPatient";

export class GetAccessPatientController {
  private getAccessPatientUseCase;

  constructor(getAccessPatientUseCase: GetAccessPatient) {
    this.getAccessPatientUseCase = getAccessPatientUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { patient_id } = request.params;

      const access = await this.getAccessPatientUseCase.execute(patient_id);

      return response.status(200).json({ access });
    } catch (error) {
      return response.status(400).json({
        message: error.message
      });
    }
  }
}
