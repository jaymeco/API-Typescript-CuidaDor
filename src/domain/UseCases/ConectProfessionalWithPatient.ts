import { getCustomRepository } from 'typeorm';
import { PostgresAccountRepository } from '../../infra/repositories/PostgresAccountRepository';
import { PostgresPatientRepository } from '../../infra/repositories/PostgresPatientRepository';
import { PostgresProfessionalPatientRepository } from '../../infra/repositories/PostgresProfessionalPatientRepository';
import { PostgresProfessionalRepository } from '../../infra/repositories/PostgresProfessionalRepository';
import { IProfessionalPatientRequestDTO } from '../DTOs/ProfessionalPatient';

export class ConectProfessionalWithPatient {
  async execute(data: IProfessionalPatientRequestDTO): Promise<object> {
    const postgresAccountRepository = getCustomRepository(PostgresAccountRepository);
    const postgresProfessionalPatientRepository = getCustomRepository(PostgresProfessionalPatientRepository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);
    const postgresProfessionalRepository = getCustomRepository(PostgresProfessionalRepository);


    const accountExists = await postgresAccountRepository.findOne({ email: data.email });

    if (!accountExists) {
      throw new Error('This account does not exists!');
    }

    const patientExists = await postgresPatientRepository.findOne({ account_id: accountExists.id });

    if (!patientExists) {
      const professionalExists = await postgresProfessionalRepository.findOne({ account_id: accountExists.id });

      const patient = await postgresPatientRepository.findOne({ id: data.id });

      if (!patient) {
        throw new Error('This patient does not exists!');
      }

      const professionalPatientExists = await postgresProfessionalPatientRepository.findOne({
        where: { patient_id: data.id, professional_id: professionalExists?.id }
      });

      if (professionalPatientExists) {
        throw new Error('This patient is already conected with you!');
      }
      const professionalPatinet = postgresProfessionalPatientRepository.create({
        patient_id: data.id,
        professional_id: professionalExists?.id
      });

      await postgresProfessionalPatientRepository.save(professionalPatinet);

      return patient;
    }
    const professional = await postgresProfessionalRepository.findOne({ id: data.id });

    if(!professional){
      throw new Error('This professional does not exists!');
    }

    const professionalPatientExists = await postgresProfessionalPatientRepository.findOne({
      where: { patient_id: patientExists?.id, professional_id: data.id }
    });

    if (professionalPatientExists) {
      throw new Error('This professional is already conected with you!');
    }

    const professionalPatinet = postgresProfessionalPatientRepository.create({
      patient_id: patientExists?.id,
      professional_id: data.id
    });

    await postgresProfessionalPatientRepository.save(professionalPatinet);

    return professional;
  }
}
