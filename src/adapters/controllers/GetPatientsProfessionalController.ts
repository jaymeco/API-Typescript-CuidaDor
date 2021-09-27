import { Request, Response } from "express";
import { GetPatientsByProfessionals } from "../../domain/UseCases/GetPatientsByProfessional";

export class GetPatientsByProfessionalController {
  private getPatientsByProfessionalController;

  constructor(getPatientsByProfessionalController: GetPatientsByProfessionals) {
    this.getPatientsByProfessionalController = getPatientsByProfessionalController;
  }

  async handle(request: Request, response: Response ): Promise<Response> {
    try {
      const { professional_id } = request.params;

      const patients = await this.getPatientsByProfessionalController.execute(professional_id);

      return response.status(200).json(patients);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message
      });
    }
  }
}
