"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePainEducation = void 0;
const typeorm_1 = require("typeorm");
const PostgresPainEducationRepository_1 = require("../../infra/repositories/PostgresPainEducationRepository");
class CreatePainEducation {
    async execute(data) {
        const postgresPainEducationRepository = typeorm_1.getCustomRepository(PostgresPainEducationRepository_1.PostgresPainEducationRepository);
        const news = postgresPainEducationRepository.create(data);
        await postgresPainEducationRepository.save(news);
    }
}
exports.CreatePainEducation = CreatePainEducation;
