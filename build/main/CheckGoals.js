"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGoalsController = void 0;
const CheckGoals_1 = require("../domain/UseCases/CheckGoals");
const CheckGoalsController_1 = require("../adapters/controllers/CheckGoalsController");
const checkGoalsUseCase = new CheckGoals_1.CheckGoals();
const checkGoalsController = new CheckGoalsController_1.CheckGoalsController(checkGoalsUseCase);
exports.checkGoalsController = checkGoalsController;
