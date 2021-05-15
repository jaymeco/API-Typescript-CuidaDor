"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDailyAssessmentController = void 0;
class CreateDailyAssessmentController {
    constructor(createDalitAssessmentUseCase) {
        this.createDalitAssessmentUseCase = createDalitAssessmentUseCase;
    }
    async handle(request, response) {
        try {
            await this.createDalitAssessmentUseCase.execute(request.body);
            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.CreateDailyAssessmentController = CreateDailyAssessmentController;
