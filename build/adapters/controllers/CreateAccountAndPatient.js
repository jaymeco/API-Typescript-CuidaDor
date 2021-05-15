"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountAndPatient = void 0;
class CreateAccountAndPatient {
    constructor(createAccountUseCase, createPatientUseCase) {
        this.createAccountUseCase = createAccountUseCase;
        this.createPatientUseCase = createPatientUseCase;
    }
    async handle(request, response) {
        try {
            const _a = request.body, { email, password } = _a, rest = __rest(_a, ["email", "password"]);
            const account = await this.createAccountUseCase.execute({
                email,
                password
            });
            const patient = await this.createPatientUseCase.execute(Object.assign({ account_id: account.id }, rest));
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
