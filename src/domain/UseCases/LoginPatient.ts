import { getCustomRepository } from "typeorm";
import { IJwtManagerContract } from "../../infra/repositories/contracts/IJwtManagerContract";
import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { PostgresProfessionalRepository } from "../../infra/repositories/PostgresProfessionalRepository";
import comparePassword from "../../infra/utils/comparePassword";
import { ILoginRequestDTO, ILoginResponseDTO } from "../DTOs/Login";
import { Patient } from "../entities/Patient";

export class LoginPatient {
  private jwtManagerRepository;

  constructor (jwtManagerRepository: IJwtManagerContract) {
    this.jwtManagerRepository = jwtManagerRepository;
  }

  async execute(data: ILoginRequestDTO): Promise<ILoginResponseDTO> {
    const postgresAccountRepository = getCustomRepository(PostgresAccountRepository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);
    const postgresProfessionalRepository = getCustomRepository(PostgresProfessionalRepository);

    const accountExists = await postgresAccountRepository.findOne({
      where: { email: data.email },
      relations: ['patient']
     });

    if(!accountExists) {
      throw new Error('Email or Password are invalid!');
    }

    if(!await comparePassword(accountExists.password, data.password)){
      throw new Error('Email or Password are invalid!');
    }

    const token = this.jwtManagerRepository.generateToken(accountExists.id);

    return {
      role: 'Patient',
      token,
      user: accountExists
    }
  }
}
