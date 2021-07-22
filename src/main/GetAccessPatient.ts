import { GetAccessPatient } from '../domain/UseCases/GetAccessPatient';
import { GetAccessPatientController } from '../adapters/controllers/GetAccessPatientController';

const getAccessPatientUseCase = new GetAccessPatient();

const getAccessPatientController = new GetAccessPatientController(getAccessPatientUseCase);

export { getAccessPatientController };
