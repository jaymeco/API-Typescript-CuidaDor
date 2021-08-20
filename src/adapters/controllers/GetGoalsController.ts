import { Request, Response } from "express";
import { GetGoals } from "../../domain/UseCases/GetGoals";

export class GetGoalsController {
  private getGoalsUseCase;

  constructor (getGoalsUseCase: GetGoals) {
    this.getGoalsUseCase = getGoalsUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { patient_id } = request.params;

      const goals = await this.getGoalsUseCase.execute(patient_id);

      return response.status(200).json(goals);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }
}
