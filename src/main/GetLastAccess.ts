import { GetLastAccess } from '../domain/UseCases/GetLastAccess';
import { GetLastAccessController } from '../adapters/controllers/GetLastAccessController';

const useCase = new GetLastAccess();
const getLastAccessController = new GetLastAccessController(useCase);

export { getLastAccessController };
