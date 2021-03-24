import { LoginProfessional } from '../domain/UseCases/LoginProfessional';
import { JwtManagerRepository } from '../infra/repositories/JwtManagerRepository';
import { LoginProfessionalController } from '../adapters/controllers/LoginProfessionalController';

const jwtManagerRepository = new JwtManagerRepository();

const loginProfessionalUseCase = new LoginProfessional(jwtManagerRepository);

const loginProfessionalController = new LoginProfessionalController(loginProfessionalUseCase);

export { loginProfessionalController };
