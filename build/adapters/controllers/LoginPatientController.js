"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPatientController = void 0;
class LoginPatientController {
    constructor(loginPatientUseCase) {
        this.loginPatientUseCase = loginPatientUseCase;
    }
    async handle(request, response) {
        try {
            const { email, password } = request.body;
            const data = await this.loginPatientUseCase.execute({ email, password });
            return response.status(200).json(data);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            });
        }
    }
}
exports.LoginPatientController = LoginPatientController;
