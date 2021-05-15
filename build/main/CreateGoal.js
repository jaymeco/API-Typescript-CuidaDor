"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGoalController = void 0;
const CreateGoal_1 = require("../domain/UseCases/CreateGoal");
const CreateGoalController_1 = require("../adapters/controllers/CreateGoalController");
const createGoalUseCase = new CreateGoal_1.CreateGoal();
const createGoalController = new CreateGoalController_1.CreateGoalController(createGoalUseCase);
exports.createGoalController = createGoalController;
