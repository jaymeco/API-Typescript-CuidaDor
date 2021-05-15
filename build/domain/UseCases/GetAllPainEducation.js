"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPainEducation = void 0;
const typeorm_1 = require("typeorm");
const PostgresPainEducationRepository_1 = require("../../infra/repositories/PostgresPainEducationRepository");
class GetAllPainEducation {
    async execute() {
        const postgresPainEducation = typeorm_1.getCustomRepository(PostgresPainEducationRepository_1.PostgresPainEducationRepository);
        const news = await postgresPainEducation.find();
        return news;
    }
}
exports.GetAllPainEducation = GetAllPainEducation;
