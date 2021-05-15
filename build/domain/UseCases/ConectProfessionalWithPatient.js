"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConectProfessionalWithPatient = void 0;
const typeorm_1 = require("typeorm");
const PostgresAccountRepository_1 = require("../../infra/repositories/PostgresAccountRepository");
const PostgresPatientRepository_1 = require("../../infra/repositories/PostgresPatientRepository");
const PostgresProfessionalPatientRepository_1 = require("../../infra/repositories/PostgresProfessionalPatientRepository");
const PostgresProfessionalRepository_1 = require("../../infra/repositories/PostgresProfessionalRepository");
class ConectProfessionalWithPatient {
    async execute(data) {
        const postgresAccountRepository = typeorm_1.getCustomRepository(PostgresAccountRepository_1.PostgresAccountRepository);
        const postgresProfessionalPatientRepository = typeorm_1.getCustomRepository(PostgresProfessionalPatientRepository_1.PostgresProfessionalPatientRepository);
        const postgresPatientRepository = typeorm_1.getCustomRepository(PostgresPatientRepository_1.PostgresPatientRepository);
        const postgresProfessionalRepository = typeorm_1.getCustomRepository(PostgresProfessionalRepository_1.PostgresProfessionalRepository);
        const accountExists = await postgresAccountRepository.findOne({ email: data.email });
        if (!accountExists) {
            throw new Error('This account does not exists!');
        }
        const patientExists = await postgresPatientRepository.findOne({ account_id: accountExists.id });
        if (!patientExists) {
            const professionalExists = await postgresProfessionalRepository.findOne({ account_id: accountExists.id });
            const patient = await postgresPatientRepository.findOne({ id: data.id });
            if (!professionalExists) {
                throw new Error('This professional does not exists!');
            }
            if (!patient) {
                throw new Error('This patient does not exists!');
            }
            const professionalPatientExists = await postgresProfessionalPatientRepository.findOne({
                where: { patient_id: data.id, professional_id: professionalExists === null || professionalExists === void 0 ? void 0 : professionalExists.id }
            });
            if (professionalPatientExists) {
                throw new Error('This professional is already conected with you!');
            }
            const professionalPatinet = postgresProfessionalPatientRepository.create({
                patient_id: data.id,
                professional_id: professionalExists === null || professionalExists === void 0 ? void 0 : professionalExists.id
            });
            await postgresProfessionalPatientRepository.save(professionalPatinet);
            return professionalExists;
        }
        const professional = await postgresProfessionalRepository.findOne({ id: data.id });
        if (!professional) {
            throw new Error('This professional does not exists!');
        }
        const professionalPatientExists = await postgresProfessionalPatientRepository.findOne({
            where: { patient_id: patientExists === null || patientExists === void 0 ? void 0 : patientExists.id, professional_id: data.id }
        });
        if (professionalPatientExists) {
            throw new Error('This patient is already conected with you!');
        }
        const professionalPatinet = postgresProfessionalPatientRepository.create({
            patient_id: patientExists === null || patientExists === void 0 ? void 0 : patientExists.id,
            professional_id: data.id
        });
        await postgresProfessionalPatientRepository.save(professionalPatinet);
        return patientExists;
    }
}
exports.ConectProfessionalWithPatient = ConectProfessionalWithPatient;
