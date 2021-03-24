import { getCustomRepository } from "typeorm";
import { IJwtManagerContract } from "../../infra/repositories/contracts/IJwtManagerContract";
import { PostgresAccountRepository } from "../../infra/repositories/PostgresAccountRepository";
import { PostgresProfessionalRepository } from "../../infra/repositories/PostgresProfessionalRepository";
import comparePassword from "../../infra/utils/comparePassword";
import { ILoginRequestDTO, ILoginResponseDTO } from "../DTOs/Login";

export class LoginProfessional {
  private jwtManagerRepository;

  constructor (jwtManagerRepository: IJwtManagerContract){
    this.jwtManagerRepository = jwtManagerRepository;
  }

  async execute(data: ILoginRequestDTO): Promise<ILoginResponseDTO> {
    const postgresAccountRepository = getCustomRepository(PostgresAccountRepository);
    const postgresProfessionalRepository = getCustomRepository(PostgresProfessionalRepository);

    const accountExists = await postgresAccountRepository.findOne({ email: data.email });

    if(!accountExists) {
      throw new Error('Email or Password are invalid!');
    }

    if(!await comparePassword(accountExists.password, data.password)){
      throw new Error('Email or Password are invalid!');
    }

    const professional = await postgresProfessionalRepository.findOne({ account_id: accountExists.id });

    if(!professional) {
      throw new Error('Email or Password are invalid!');
    }

    const token = this.jwtManagerRepository.generateToken(accountExists.id);

    return {
      role: 'Patient',
      token,
      user: Object.assign(accountExists, professional),
    }
  }
}
