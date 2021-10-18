import { Request, Response } from "express";
import { GetGraphicThreeValues } from "../../domain/UseCases/GetGraphicThreeValues";
import { GetPatient } from "../../domain/UseCases/GetPatient";

export class GetPatientController {
  private getPatientUseCase;

  constructor (getPatientUseCase: GetPatient){
    this.getPatientUseCase = getPatientUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const patient = await this.getPatientUseCase.execute(
        id,
      );

      return response.status(200).json(patient);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
