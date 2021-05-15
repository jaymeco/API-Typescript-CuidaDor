"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConectProfessionalWithPatientController = void 0;
class ConectProfessionalWithPatientController {
    constructor(conectPatientWithProssionalUseCase) {
        this.conectPatientWithProssionalUseCase = conectPatientWithProssionalUseCase;
    }
    async handle(request, response) {
        try {
            const { id, email } = request.body;
            const data = await this.conectPatientWithProssionalUseCase.execute({ id, email });
            return response.status(200).json(data);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpectd error!'
            });
        }
    }
}
exports.ConectProfessionalWithPatientController = ConectProfessionalWithPatientController;
