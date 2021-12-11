import { Request, Response } from "express";
import { GetGraphicThreeValues } from "../../domain/UseCases/GetGraphicThreeValues";
import { GetPatient } from "../../domain/UseCases/GetPatient";
import { UpdatePatient } from "../../domain/UseCases/UpdatePatient";

export class UpdatePatientController {
  private updatePatientUseCase;

  constructor (updatePatientUseCase: UpdatePatient){
    this.updatePatientUseCase = updatePatientUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { patient_id } = request.params;
      const data = request.body;

      await this.updatePatientUseCase.execute(
        data,
        patient_id,
      );

      return response.status(200).json({ message: 'Dados atualizados com sucesso!' });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
