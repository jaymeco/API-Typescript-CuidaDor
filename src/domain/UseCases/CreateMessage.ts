import { getCustomRepository } from "typeorm";
import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import { PostgresChatMessagesRepository } from "../../infra/repositories/PostgresCharMessagesRepository";
import hashpassword from "../../infra/utils/hashpassword";
import { ICreateAccountRequestDTO } from "../DTOs/CreateAccount";
import { Accounts } from "../entities/Accounts";
import { ChatMessages } from "../entities/ChatMessages";

export class CreateMessage {

  async execute(
    id: string,
    chat_room: string,
    message: string,
    socket_id: string,
    created_at: string,
    userName: string,
    userId: string,
  ): Promise<ChatMessages> {
    const repository = getCustomRepository(PostgresChatMessagesRepository);

    const createdMessage = repository.create({
      id,
      chat_room,
      created_at,
      message,
      socket_id,
      userId,
      userName,
    });

    return await repository.save(createdMessage);
  }
}
