"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginProfessionalController = void 0;
class LoginProfessionalController {
    constructor(loginProfessionalUseCase) {
        this.loginProfessionalUseCase = loginProfessionalUseCase;
    }
    async handle(request, response) {
        try {
            const { email, password } = request.body;
            const data = await this.loginProfessionalUseCase.execute({ email, password });
            return response.status(200).json(data);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            });
        }
    }
}
exports.LoginProfessionalController = LoginProfessionalController;
