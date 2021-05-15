"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGraphicThreeValuesController = void 0;
class GetGraphicThreeValuesController {
    constructor(getGraphicThreeValuesUseCase) {
        this.getGraphicThreeValuesUseCase = getGraphicThreeValuesUseCase;
    }
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { year } = request.query;
            const dailies = await this.getGraphicThreeValuesUseCase.execute(id, year);
            return response.status(200).json(dailies);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}
exports.GetGraphicThreeValuesController = GetGraphicThreeValuesController;
