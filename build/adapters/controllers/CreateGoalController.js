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
exports.CreateGoalController = void 0;
class CreateGoalController {
    constructor(createGoalUseCase) {
        this.createGoalUseCase = createGoalUseCase;
    }
    async handle(request, response) {
        try {
            const _a = request.body, { content, patient_id, professional_id } = _a, rest = __rest(_a, ["content", "patient_id", "professional_id"]);
            const goal = await this.createGoalUseCase.execute(Object.assign({ content,
                patient_id,
                professional_id }, rest));
            return response.status(201).json(goal);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            });
        }
    }
}
exports.CreateGoalController = CreateGoalController;
