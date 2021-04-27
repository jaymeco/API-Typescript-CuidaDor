import { Request, Response } from "express";
import { GetGraphicThreeValues } from "../../domain/UseCases/GetGraphicThreeValues";

export class GetGraphicThreeValuesController {
  private getGraphicThreeValuesUseCase;

  constructor (getGraphicThreeValuesUseCase: GetGraphicThreeValues){
    this.getGraphicThreeValuesUseCase = getGraphicThreeValuesUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { year } = request.query;

      const dailies = await this.getGraphicThreeValuesUseCase.execute(
        id,
        year as string
      );

      return response.status(200).json(dailies);
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
