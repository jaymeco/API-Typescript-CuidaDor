import { Request, Response } from "express";
import { Professional } from "../domain/entities/Professional";
import ProfessionalService from "../services/ProfessionalService";

class ProfessionalController {
  private service;

  constructor() {
    this.service = ProfessionalService;
  }

  public async updateProfessional(request: Request, response: Response) {
    try {
      const { professional_id } = request.params;
      const data = request.body;

      const professional = await this.service.updateProfessional(
        data,
        professional_id,
      );

      return response.status(200).json(professional);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ProfessionalController();
