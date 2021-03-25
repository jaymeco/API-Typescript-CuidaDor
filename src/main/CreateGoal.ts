import { CreateGoal } from '../domain/UseCases/CreateGoal';
import { CreateGoalController } from '../adapters/controllers/CreateGoalController';

const createGoalUseCase = new CreateGoal();

const createGoalController = new CreateGoalController(createGoalUseCase);

export { createGoalController };
