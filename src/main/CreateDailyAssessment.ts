import { CreateDailyAssessment } from '../domain/UseCases/CreateDailyAssessment';
import { CreateDailyAssessmentController } from '../adapters/controllers/CreatedailyAssessmentController';

const createDaliyAssessmentUseCase = new CreateDailyAssessment();

const createDaliyAssessmentController = new CreateDailyAssessmentController(createDaliyAssessmentUseCase);

export { createDaliyAssessmentController };
