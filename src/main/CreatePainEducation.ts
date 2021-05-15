import { CreatePainEducation } from '../domain/UseCases/CreatePainEducation';
import { CreatePainEducationController } from '../adapters/controllers/CreatePainEducationController';

const createPainEducationUseCase = new CreatePainEducation();

const createPainEducationController = new CreatePainEducationController(
  createPainEducationUseCase
);

export { createPainEducationController };
