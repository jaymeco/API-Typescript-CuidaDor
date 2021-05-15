"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDaliyAssessmentController = void 0;
const CreateDailyAssessment_1 = require("../domain/UseCases/CreateDailyAssessment");
const CreateDailyAssessmentController_1 = require("../adapters/controllers/CreateDailyAssessmentController");
const createDaliyAssessmentUseCase = new CreateDailyAssessment_1.CreateDailyAssessment();
const createDaliyAssessmentController = new CreateDailyAssessmentController_1.CreateDailyAssessmentController(createDaliyAssessmentUseCase);
exports.createDaliyAssessmentController = createDaliyAssessmentController;
