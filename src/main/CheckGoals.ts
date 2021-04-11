import { CheckGoals } from '../domain/UseCases/CheckGoals';
import { CheckGoalsController } from '../adapters/controllers/CheckGoalsController';

const checkGoalsUseCase = new CheckGoals();

const checkGoalsController = new CheckGoalsController(checkGoalsUseCase);

export { checkGoalsController };
