import { Request, Response, NextFunction } from 'express';
import { IJwtManagerContract } from '../../infra/repositories/contracts/IJwtManagerContract';
import { JwtManagerRepository } from '../../infra/repositories/JwtManagerRepository';


export class AuthRoutes {
  private jwtManagerRepository;

  constructor(jwtManagerRepository: IJwtManagerContract) {
    this.jwtManagerRepository = jwtManagerRepository;
  }

  handle(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).json({ error: "Token não fornecido" });
    }

    const parts = authorization.split(' ');
    if (parts.length !== 2) {
      return response.status(401).json({ error: "Erro ao buscar o token!" });
    }

    const [bearer, token] = parts;

    if (!/Bearer$/i.test(bearer)) {
      return response.status(401).json({ error: "O token informado está mal formatado!" });
    }

    const jwtManagerRepository = new JwtManagerRepository()

    if(!jwtManagerRepository.verifyToken(token).valid){
      return response.status(401).json({
        error: jwtManagerRepository.verifyToken(token).message
      });
    }



    return next();
  }
}
