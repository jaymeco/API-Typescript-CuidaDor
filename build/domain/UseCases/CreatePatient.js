"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatient = void 0;
const typeorm_1 = require("typeorm");
const PostgresPatientRepository_1 = require("../../infra/repositories/PostgresPatientRepository");
class CreatePatient {
    async execute(data) {
        const postgresPatientRepository = typeorm_1.getCustomRepository(PostgresPatientRepository_1.PostgresPatientRepository);
        const patientExists = await postgresPatientRepository.findOne({ account_id: data.account_id });
        if (patientExists) {
            throw new Error('This patient already exists!');
        }
        const patient = postgresPatientRepository.create(data);
        return await postgresPatientRepository.save(patient);
    }
}
exports.CreatePatient = CreatePatient;
