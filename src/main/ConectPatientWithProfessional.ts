import { ConectProfessionalWithPatient } from '../domain/UseCases/ConectProfessionalWithPatient';
import { ConectProfessionalWithPatientController } from '../adapters/controllers/ConectProfessionalWithPatientController';

const conectProfessionalWithPatientUseCase = new ConectProfessionalWithPatient();

const conectProfessionalWithPatientController = new ConectProfessionalWithPatientController(
  conectProfessionalWithPatientUseCase
);

export { conectProfessionalWithPatientController };
