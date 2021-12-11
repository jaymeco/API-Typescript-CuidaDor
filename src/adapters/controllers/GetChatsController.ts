import { Request, Response } from "express";
import { GetChats } from "../../domain/UseCases/GetChats";

export class GetChatsController {
  private getChatsUseCase;

  constructor (getChatsUseCase: GetChats){
    this.getChatsUseCase = getChatsUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { professional_id } = request.params;

      const chats = await this.getChatsUseCase.execute(
        professional_id,
      );

      return response.status(200).json(chats);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
