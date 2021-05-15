"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePainEducationController = void 0;
class CreatePainEducationController {
    constructor(createPainEducationUseCase) {
        this.createPainEducationUseCase = createPainEducationUseCase;
    }
    async handle(request, response) {
        try {
            const { title, description, link, image } = request.body;
            await this.createPainEducationUseCase.execute({ title, description, link, image });
            return response.status(201).json({
                message: 'Sua notícia foi salva com sucesso!'
            });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}
exports.CreatePainEducationController = CreatePainEducationController;
