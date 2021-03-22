import { CreateAccount } from '../domain/UseCases/CreateAccont';
import { CreateAccountAndPatient } from '../adapters/controllers/CreateAccountAndPatient';

const createAccountUseCase = new CreateAccount();

const createAccountPatientController = new CreateAccountAndPatient(createAccountUseCase);

export { createAccountPatientController };
