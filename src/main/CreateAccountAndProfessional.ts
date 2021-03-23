import { CreateProfessional } from '../domain/UseCases/CreateProfessional';
import { CreateAccount } from '../domain/UseCases/CreateAccont';
import { CreateAccountAndProfessional } from '../adapters/controllers/CreateAccountAndProfessional';

const createAccountUseCase = new CreateAccount();

const createProfessionalUseCase = new CreateProfessional();

const createAccountAndProfessional = new CreateAccountAndProfessional(createAccountUseCase, createProfessionalUseCase);

export { createAccountAndProfessional };
