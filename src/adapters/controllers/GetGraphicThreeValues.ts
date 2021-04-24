import { Request, Response } from "express";
import { GetGraphicThreeValues } from "../../domain/UseCases/GetGraphicThreeVales";

export class GetGraphicThreeValuesController {
  private getGraphicThreeValuesUseCase;

  constructor (getGraphicThreeValuesUseCase: GetGraphicThreeValues){
    this.getGraphicThreeValuesUseCase = getGraphicThreeValuesUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const dailies = await this.getGraphicThreeValuesUseCase.execute(id);

      return response.status(200).json(dailies);
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
