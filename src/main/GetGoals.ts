import { GetGoals } from '../domain/UseCases/GetGoals';
import { GetGoalsController } from '../adapters/controllers/GetGoalsController';

const getGoalsUseCase = new GetGoals();

const getGoalsController = new GetGoalsController(getGoalsUseCase);

export { getGoalsController };
