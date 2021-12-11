import { EntityRepository, Repository } from "typeorm";
import { ChatMessages } from "../../domain/entities/ChatMessages";

@EntityRepository(ChatMessages)
export class PostgresChatMessagesRepository extends Repository<ChatMessages> {}
