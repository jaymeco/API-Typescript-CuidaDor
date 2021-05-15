"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGoalsController = void 0;
class GetGoalsController {
    constructor(getGoalsUseCase) {
        this.getGoalsUseCase = getGoalsUseCase;
    }
    async handle(request, response) {
        try {
            const { id } = request.params;
            const goals = await this.getGoalsUseCase.execute(id);
            return response.status(200).json(goals);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            });
        }
    }
}
exports.GetGoalsController = GetGoalsController;
