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
      const { data } = request.query;

      const access = await this.getAccessPatientUseCase.execute(patient_id, data as string);

      return response.status(200).json({ access });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message
      });
    }
  }
}
