import { IJwtManagerContract } from "./contracts/IJwtManagerContract";
import jwt from 'jsonwebtoken';

export class JwtManagerRepository implements IJwtManagerContract {
  generateToken(id: string): string {
    const token = jwt.sign({ id }, process.env.SECRET || '022dw2daw66dw9adw5a5', {
      expiresIn: 86400,
    });

    return token;
  }

  verifyToken(token: string): boolean {
    const decoded = jwt.verify(token, process.env.SECRET || '022dw2daw66dw9adw5a5');

    if(!decoded){
      return false
    }

    return true;
  }
}
