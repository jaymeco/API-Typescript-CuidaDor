import { Request, Response } from "express";
import { CreatePainEducation } from "../../domain/UseCases/CreatePainEducation";

export class CreatePainEducationController {
  private createPainEducationUseCase;

  constructor(createPainEducationUseCase: CreatePainEducation){
    this.createPainEducationUseCase = createPainEducationUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const { title, description, link, image } = request.body;

      await this.createPainEducationUseCase.execute(
        { title, description, link, image }
      );

      return response.status(201).json({
        message: 'Sua notícia foi salva com sucesso!'
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message
      });
    }
  }
}
