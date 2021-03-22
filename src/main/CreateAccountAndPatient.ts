import { CreateAccount } from '../domain/UseCases/CreateAccont';
import { CreatePatient } from '../domain/UseCases/CreatePatient';
import { CreateAccountAndPatient } from '../adapters/controllers/CreateAccountAndPatient';

const createAccountUseCase = new CreateAccount();

const createPatientUseCase = new CreatePatient();

const createAccountPatientController = new CreateAccountAndPatient(createAccountUseCase, createPatientUseCase);

export { createAccountPatientController };
