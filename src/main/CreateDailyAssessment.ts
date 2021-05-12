import { CreateDailyAssessment } from '../domain/UseCases/CreateDailyAssessment';
import { CreateDailyAssessmentController } from '../adapters/controllers/CreateDailyAssessmentController';

const createDaliyAssessmentUseCase = new CreateDailyAssessment();

const createDaliyAssessmentController = new CreateDailyAssessmentController(createDaliyAssessmentUseCase);

export { createDaliyAssessmentController };
