import { getCustomRepository } from "typeorm";
import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import { PostgresChatMessagesRepository } from "../../infra/repositories/PostgresCharMessagesRepository";
import hashpassword from "../../infra/utils/hashpassword";
import { ICreateAccountRequestDTO } from "../DTOs/CreateAccount";
import { Accounts } from "../entities/Accounts";
import { ChatMessages } from "../entities/ChatMessages";

export class GetMessagesByRoomUseCase {

  async execute(
    chat_room: string,
  ): Promise<ChatMessages[]> {
    const repository = getCustomRepository(PostgresChatMessagesRepository);

    const messages = await repository.find({
      chat_room,
    })

    return messages;
  }
}
