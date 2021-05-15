"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPainEducationController = void 0;
class GetAllPainEducationController {
    constructor(getAllPainEducationUseCase) {
        this.getAllPainEducationUseCase = getAllPainEducationUseCase;
    }
    async handle(request, response) {
        try {
            const news = await this.getAllPainEducationUseCase.execute();
            return response.status(200).json(news);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}
exports.GetAllPainEducationController = GetAllPainEducationController;
