import { GetPatientsByProfessionals } from '../domain/UseCases/GetPatientsByProfessional';
import { GetPatientsByProfessionalController } from '../adapters/controllers/GetPatientsProfessionalController';

const getPatientsByProfessionalsUseCase = new GetPatientsByProfessionals();

const getPatientsByProfessionalController = new GetPatientsByProfessionalController(
  getPatientsByProfessionalsUseCase,
);

export { getPatientsByProfessionalController };
