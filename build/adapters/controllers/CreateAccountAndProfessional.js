"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountAndProfessional = void 0;
class CreateAccountAndProfessional {
    constructor(createAccountUseCase, createProfessionalUseCase) {
        this.createAccountUseCase = createAccountUseCase;
        this.createProfessionalUseCase = createProfessionalUseCase;
    }
    async handle(request, response) {
        try {
            const { email, password, ...rest } = request.body;
            const account = await this.createAccountUseCase.execute({ email, password });
            const professional = await this.createProfessionalUseCase.execute({
                account_id: account.id,
                ...rest
            });
            return response.status(201).json({ account, professional });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            });
        }
    }
}
exports.CreateAccountAndProfessional = CreateAccountAndProfessional;
