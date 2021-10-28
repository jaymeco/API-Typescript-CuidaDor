import { UpdatePatient } from '../domain/UseCases/UpdatePatient';
import { UpdatePatientController } from '../adapters/controllers/UpdatePatientController';

const updatePatientUseCase = new UpdatePatient();
const updatePatientController = new UpdatePatientController(updatePatientUseCase);

export { updatePatientController };
