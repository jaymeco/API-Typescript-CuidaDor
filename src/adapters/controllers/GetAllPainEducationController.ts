import { Request, Response } from "express";
import { GetAllPainEducation } from "../../domain/UseCases/GetAllPainEducation";

export class GetAllPainEducationController {
  private getAllPainEducationUseCase;

  constructor (getAllPainEducationUseCase: GetAllPainEducation){
    this.getAllPainEducationUseCase = getAllPainEducationUseCase;
  }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const news = await this.getAllPainEducationUseCase.execute();

      return response.status(200).json(news)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      });
    }
  }
}
