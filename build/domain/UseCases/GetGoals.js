"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGoals = void 0;
const typeorm_1 = require("typeorm");
const PostgresGoalRepository_1 = require("../../infra/repositories/PostgresGoalRepository");
const PostgresPatientRepository_1 = require("../../infra/repositories/PostgresPatientRepository");
class GetGoals {
    async execute(patient_id) {
        const postgresGoalRepository = typeorm_1.getCustomRepository(PostgresGoalRepository_1.PostgresGoalRepository);
        const postgresPatientRepository = typeorm_1.getCustomRepository(PostgresPatientRepository_1.PostgresPatientRepository);
        const patientExists = await postgresPatientRepository.findOne({ id: patient_id });
        if (!patientExists) {
            throw new Error('This patient does not exists!');
        }
        const goals = await postgresGoalRepository.find({
            where: { patient_id: patient_id }
        });
        return goals;
    }
}
exports.GetGoals = GetGoals;
