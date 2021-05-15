"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGoalController = void 0;
class CreateGoalController {
    constructor(createGoalUseCase) {
        this.createGoalUseCase = createGoalUseCase;
    }
    async handle(request, response) {
        try {
            const { content, patient_id, professional_id, ...rest } = request.body;
            const goal = await this.createGoalUseCase.execute({
                content,
                patient_id,
                professional_id,
                ...rest
            });
            return response.status(201).json(goal);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            });
        }
    }
}
exports.CreateGoalController = CreateGoalController;
