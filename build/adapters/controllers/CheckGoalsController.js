"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckGoalsController = void 0;
class CheckGoalsController {
    constructor(checkGoalsUseCase) {
        this.checkGoalsUseCase = checkGoalsUseCase;
    }
    async handle(request, response) {
        try {
            const { id, checked } = request.body;
            await this.checkGoalsUseCase.execute(checked, id);
            return response.status(200).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.CheckGoalsController = CheckGoalsController;
