import { GetProfessionalByPatients } from '../domain/UseCases/GetProfessionalsByPatients';
import { GetProfessionalsByPatientsController } from '../adapters/controllers/GetProfessionalsByPatientsController';

const getProfessionalsByPatientsUseCase = new GetProfessionalByPatients();

const getProfessionalsByPatientsController = new GetProfessionalsByPatientsController(getProfessionalsByPatientsUseCase);

export { getProfessionalsByPatientsController };
