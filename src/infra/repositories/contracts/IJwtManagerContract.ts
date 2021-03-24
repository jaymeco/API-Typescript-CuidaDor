
export interface IJwtManagerContract {
  generateToken(id: string): string;
  verifyToken(token: string): boolean;
}
