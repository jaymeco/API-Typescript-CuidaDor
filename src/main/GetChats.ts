import { GetChats } from '../domain/UseCases/GetChats';
import { GetChatsController } from '../adapters/controllers/GetChatsController';

const useCase = new GetChats();

const getChatsController = new GetChatsController(useCase);

export { getChatsController };
