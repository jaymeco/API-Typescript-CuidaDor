"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGoal = void 0;
const typeorm_1 = require("typeorm");
const PostgresGoalRepository_1 = require("../../infra/repositories/PostgresGoalRepository");
const PostgresPatientRepository_1 = require("../../infra/repositories/PostgresPatientRepository");
const PostgresProfessionalPatientRepository_1 = require("../../infra/repositories/PostgresProfessionalPatientRepository");
const PostgresProfessionalRepository_1 = require("../../infra/repositories/PostgresProfessionalRepository");
class CreateGoal {
    async execute(data) {
        const postgresGoalRepository = typeorm_1.getCustomRepository(PostgresGoalRepository_1.PostgresGoalRepository);
        const postgresPatientRepository = typeorm_1.getCustomRepository(PostgresPatientRepository_1.PostgresPatientRepository);
        const postgresProfessionalRepository = typeorm_1.getCustomRepository(PostgresProfessionalRepository_1.PostgresProfessionalRepository);
        const postgresProfessionalPatient = typeorm_1.getCustomRepository(PostgresProfessionalPatientRepository_1.PostgresProfessionalPatientRepository);
        const professionalExists = postgresProfessionalRepository.findOne({ id: data.professional_id });
        if (!professionalExists) {
            throw new Error('This professional does not exists!');
        }
        const patientExists = postgresPatientRepository.findOne({ id: data.patient_id });
        if (!patientExists) {
            throw new Error('This patient does not exists!');
        }
        const professionalPatientExists = postgresProfessionalPatient.findOne({
            patient_id: data.patient_id,
            professional_id: data.professional_id
        });
        if (!professionalPatientExists) {
            throw new Error('This conection does not exists!');
        }
        const goal = postgresGoalRepository.create(data);
        return await postgresGoalRepository.save(goal);
    }
}
exports.CreateGoal = CreateGoal;
