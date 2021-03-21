import { CreateAccount } from '../domain/UseCases/CreateAccont';
import { PostgresAccountRepository } from '../infra/repositories/PostgresAccountRepository';
import { CreateAccountAndPatient } from '../adapters/controllers/CreateAccountAndPatient';
import { getCustomRepository } from 'typeorm';

const postgresAccountRepository = getCustomRepository(PostgresAccountRepository);

const createAccountUseCase = new CreateAccount(postgresAccountRepository);

const createAccountPatientController = new CreateAccountAndPatient(createAccountUseCase);

export { createAccountPatientController };
