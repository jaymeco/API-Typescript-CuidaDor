import { GetPatient } from '../domain/UseCases/GetPatient';
import { GetPatientController } from '../adapters/controllers/GetPatientController';

const useCase = new GetPatient();
const getPatientController = new GetPatientController(useCase);

export { getPatientController };
