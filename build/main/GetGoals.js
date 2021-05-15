"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoalsController = void 0;
const GetGoals_1 = require("../domain/UseCases/GetGoals");
const GetGoalsController_1 = require("../adapters/controllers/GetGoalsController");
const getGoalsUseCase = new GetGoals_1.GetGoals();
const getGoalsController = new GetGoalsController_1.GetGoalsController(getGoalsUseCase);
exports.getGoalsController = getGoalsController;
