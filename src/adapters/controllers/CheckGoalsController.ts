import { Request, Response } from "express";
import { CheckGoals } from "../../domain/UseCases/CheckGoals";

export class CheckGoalsController {
  private checkGoalsUseCase;

  constructor (checkGoalsUseCase: CheckGoals) {
    this.checkGoalsUseCase = checkGoalsUseCase;
  }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id, checked } = request.body;
      await this.checkGoalsUseCase.execute(checked, id);

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}
