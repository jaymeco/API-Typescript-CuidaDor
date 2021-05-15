"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGraphicThreeValues = void 0;
const typeorm_1 = require("typeorm");
const PostgresDailyAssessment_1 = require("../../infra/repositories/PostgresDailyAssessment");
const PostgresPatientRepository_1 = require("../../infra/repositories/PostgresPatientRepository");
class GetGraphicThreeValues {
    async execute(patient_id, year) {
        const dailyAssessmentRepository = typeorm_1.getCustomRepository(PostgresDailyAssessment_1.PostgresDailyAssessmentRespository);
        const patientRepository = typeorm_1.getCustomRepository(PostgresPatientRepository_1.PostgresPatientRepository);
        const patientExists = await patientRepository.findOne({ id: patient_id });
        if (!patientExists) {
            throw new Error('This patient does not exists!');
        }
        const dailies = await dailyAssessmentRepository.find({
            patient_id
        });
        const dailiesByYear = dailies.map(daily => {
            let dailyYear = new Date(daily.created_at).getFullYear();
            if (dailyYear === Number(year)) {
                return daily;
            }
        });
        let month = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        for (let i = 5; i <= 11; i += 1) {
            let dailyMonth = 0;
            let question = {
                days: [],
                intensities: []
            };
            dailiesByYear.map((daily) => {
                dailyMonth = new Date(daily.created_at).getMonth();
                let dailyDate = new Date(daily.created_at).getDate() - 1;
                question.days.push(dailyDate);
                if (i <= 9) {
                    question.intensities.push(daily[`question_0${i}`]);
                }
                else {
                    question.intensities.push(daily[`question_${i}`]);
                }
            });
            month[dailyMonth].push(question);
        }
        return month;
    }
}
exports.GetGraphicThreeValues = GetGraphicThreeValues;
