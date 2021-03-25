import { Request, Response } from "express";
import { CreateGoal } from "../../domain/UseCases/CreateGoal";

export class CreateGoalController {
  private createGoalUseCase;

  constructor (createGoalUseCase: CreateGoal) {
    this.createGoalUseCase = createGoalUseCase;
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { content, patient_id, professional_id } = request.body;

      const goal = await this.createGoalUseCase.execute({
        content,
        patient_id,
        professional_id
      });

      return response.status(201).json(goal);

    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      });
    }
  }
}
