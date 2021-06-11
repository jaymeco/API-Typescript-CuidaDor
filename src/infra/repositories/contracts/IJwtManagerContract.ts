export interface IResponse {
  message: string;
  valid: boolean;
}


export interface IJwtManagerContract {
  generateToken(id: string): string;
  verifyToken(token: string): IResponse;
}
