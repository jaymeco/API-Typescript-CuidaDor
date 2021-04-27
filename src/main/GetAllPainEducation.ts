import { GetAllPainEducation } from '../domain/UseCases/GetAllPainEducation';
import { GetAllPainEducationController } from '../adapters/controllers/GetAllPainEducationController';

const getAllPainEducationUseCase = new GetAllPainEducation();

const getAllPainEducationController = new GetAllPainEducationController(
  getAllPainEducationUseCase
);

export { getAllPainEducationController };
