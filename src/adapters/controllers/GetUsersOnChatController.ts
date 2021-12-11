import { Request, Response } from "express";
import { GetUsersOnChat } from "../../domain/UseCases/GetUsersOnChat";

export class GetUsersOnChatController {
  private getUsersOnChatUseCase;

  constructor(getUsersOnChatUseCase: GetUsersOnChat) {
    this.getUsersOnChatUseCase = getUsersOnChatUseCase;
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { chat_room } = request.params;

      const users = await this.getUsersOnChatUseCase.execute(chat_room);

      return response.status(200).json(users);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message
      });
    }
  }
}
