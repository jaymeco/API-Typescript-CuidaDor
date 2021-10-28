import { getCustomRepository } from "typeorm";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { UpdatePatientRequestDto } from "../DTOs/UpdatePatient";

export class UpdatePatient {
  async execute(
    data: UpdatePatientRequestDto,
    patient_id: string,
  ): Promise<void> {
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await postgresPatientRepository.findOne({ id: patient_id });

    if (!patientExists) {
      throw new Error('Esse paciente não existe!');
    }

    await postgresPatientRepository.update({
      id: patient_id,
    }, data);
;
  }
}
