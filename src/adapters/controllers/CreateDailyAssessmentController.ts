import { Response, Request } from "express";
import { CreateDailyAssessment } from "../../domain/UseCases/CreateDailyAssessment";

export class CreateDailyAssessmentController {
  private createDalitAssessmentUseCase;

  constructor (createDalitAssessmentUseCase: CreateDailyAssessment){
    this.createDalitAssessmentUseCase = createDalitAssessmentUseCase;
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {

      await this.createDalitAssessmentUseCase.execute(request.body);

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}
