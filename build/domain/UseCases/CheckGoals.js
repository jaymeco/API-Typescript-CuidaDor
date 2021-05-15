"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckGoals = void 0;
const typeorm_1 = require("typeorm");
const PostgresGoalRepository_1 = require("../../infra/repositories/PostgresGoalRepository");
class CheckGoals {
    async execute(checked, id) {
        const postgresGoalsRepository = typeorm_1.getCustomRepository(PostgresGoalRepository_1.PostgresGoalRepository);
        const goalExists = await postgresGoalsRepository.findOne({ id });
        if (!goalExists) {
            throw new Error('Essa meta não existe!');
        }
        await postgresGoalsRepository.update(id, {
            checked
        });
    }
}
exports.CheckGoals = CheckGoals;
