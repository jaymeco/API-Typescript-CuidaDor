export interface AuthenticationContract {
  findOrError(id: string): void;
  patientLogin(): void;
}
