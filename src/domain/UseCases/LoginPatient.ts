import { getCustomRepository } from "typeorm";
import { IJwtManagerContract } from "../../infra/repositories/contracts/IJwtManagerContract";
import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import comparePassword from "../../infra/utils/comparePassword";
import { ILoginRequestDTO, ILoginResponseDTO } from "../DTOs/Login";

export class LoginPatient {
  private jwtManagerRepository;

  constructor (jwtManagerRepository: IJwtManagerContract) {
    this.jwtManagerRepository = jwtManagerRepository;
  }

  async execute(data: ILoginRequestDTO): Promise<ILoginResponseDTO> {
    const postgresAccountRepository = getCustomRepository(PostgresAccountRepository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);

    const accountExists = await postgresAccountRepository.findOne({
      where: { email: data.email }
     });

    if(!accountExists) {
      throw new Error('Email or Password are invalid!');
    }

    if(!await comparePassword(accountExists.password, data.password)){
      throw new Error('Email or Password are invalid!');
    }

    const patient = await postgresPatientRepository.findOne({ account_id: accountExists.id });

    if(!patient){
      throw new Error('Email or Password are invalid!');
    }

    const token = this.jwtManagerRepository.generateToken(accountExists.id);

    return {
      role: 'Patient',
      token,
      user: Object.assign(accountExists, patient),
    }
  }
}
