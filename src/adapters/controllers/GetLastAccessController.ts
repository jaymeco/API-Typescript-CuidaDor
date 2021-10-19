import { Request, Response } from "express";
import { GetLastAccess } from "../../domain/UseCases/GetLastAccess";

export class GetLastAccessController {
  private getLastAccessUseCase;

  constructor (getLastAccessUseCase: GetLastAccess){
    this.getLastAccessUseCase = getLastAccessUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { patient_id } = request.params;

      const lastAccess = await this.getLastAccessUseCase.execute(patient_id);

      return response.status(200).json({
        ultimoAcesso: lastAccess,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }
}
