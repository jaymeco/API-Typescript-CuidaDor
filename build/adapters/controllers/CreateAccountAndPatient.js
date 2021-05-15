"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountAndPatient = void 0;
class CreateAccountAndPatient {
    constructor(createAccountUseCase, createPatientUseCase) {
        this.createAccountUseCase = createAccountUseCase;
        this.createPatientUseCase = createPatientUseCase;
    }
    async handle(request, response) {
        try {
            const { email, password, ...rest } = request.body;
            const account = await this.createAccountUseCase.execute({
                email,
                password
            });
            const patient = await this.createPatientUseCase.execute({
                account_id: account.id,
                ...rest
            });
            return response.status(201).json({ account, patient });
        }
        catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error!'
            });
        }
    }
}
exports.CreateAccountAndPatient = CreateAccountAndPatient;
