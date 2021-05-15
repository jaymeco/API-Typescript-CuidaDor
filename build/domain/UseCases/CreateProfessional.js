"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessional = void 0;
const typeorm_1 = require("typeorm");
const PostgresProfessionalRepository_1 = require("../../infra/repositories/PostgresProfessionalRepository");
class CreateProfessional {
    async execute(data) {
        const postgresProfessionalRepository = typeorm_1.getCustomRepository(PostgresProfessionalRepository_1.PostgresProfessionalRepository);
        const professionalExists = await postgresProfessionalRepository.findOne({ account_id: data.account_id });
        if (professionalExists) {
            throw new Error('This professional already exists!');
        }
        const professional = postgresProfessionalRepository.create(data);
        return await postgresProfessionalRepository.save(professional);
    }
}
exports.CreateProfessional = CreateProfessional;
