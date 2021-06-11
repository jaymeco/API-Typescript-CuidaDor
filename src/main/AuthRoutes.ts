import { JwtManagerRepository } from '../infra/repositories/JwtManagerRepository';
import { AuthRoutes } from '../adapters/middlewares/AuthRotes';

const jwtManagerRepository = new JwtManagerRepository();

const authMiddleware = new AuthRoutes(jwtManagerRepository);

export { authMiddleware };
