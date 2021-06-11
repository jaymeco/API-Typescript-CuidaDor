import { IJwtManagerContract, IResponse } from "./contracts/IJwtManagerContract";
import jwt from 'jsonwebtoken';

export class JwtManagerRepository implements IJwtManagerContract {
  generateToken(id: string): string {
    const token = jwt.sign({ id }, process.env.SECRET || '022dw2daw66dw9adw5a5', {
      expiresIn: 86400,
    });

    return token;
  }

  verifyToken(token: string): IResponse {
    try {
      const decoded = jwt.verify(token, process.env.SECRET || '022dw2daw66dw9adw5a5');

      return {
        message: 'Token válido',
        valid: true
      }
    }catch (error) {
      if(error.name === 'TokenExpiredError') {
        return {
          message: 'Token expirou',
          valid: false,
        };
      }

      return {
        message: 'Token invalido',
        valid: false
      }
    }
  }
}
