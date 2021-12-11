import { GetUsersOnChat } from '../domain/UseCases/GetUsersOnChat';
import { GetUsersOnChatController } from '../adapters/controllers/GetUsersOnChatController';

const useCase = new GetUsersOnChat();

const getUsersOnChatController = new GetUsersOnChatController(useCase);

export { getUsersOnChatController };
