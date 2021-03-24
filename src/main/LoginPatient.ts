import { JwtManagerRepository } from '../infra/repositories/JwtManagerRepository';
import { LoginPatient } from '../domain/UseCases/LoginPatient';
import { LoginPatientController } from  '../adapters/controllers/LoginPatientController';

const jwtManagerRepository = new JwtManagerRepository();

const loginPatientUseCase = new LoginPatient(jwtManagerRepository);

const loginPatientController = new LoginPatientController(loginPatientUseCase);

export { loginPatientController };
