"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDailyAssessment = void 0;
const typeorm_1 = require("typeorm");
const PostgresDailyAssessment_1 = require("../../infra/repositories/PostgresDailyAssessment");
class CreateDailyAssessment {
    async execute(data) {
        const postgresDailyAssessmentRepository = typeorm_1.getCustomRepository(PostgresDailyAssessment_1.PostgresDailyAssessmentRespository);
        const dailyAssessment = postgresDailyAssessmentRepository.create(data);
        await postgresDailyAssessmentRepository.save(dailyAssessment);
    }
}
exports.CreateDailyAssessment = CreateDailyAssessment;
