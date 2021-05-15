"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPainEducationController = void 0;
const CreatePainEducation_1 = require("../domain/UseCases/CreatePainEducation");
const CreatePainEducationController_1 = require("../adapters/controllers/CreatePainEducationController");
const createPainEducationUseCase = new CreatePainEducation_1.CreatePainEducation();
const createPainEducationController = new CreatePainEducationController_1.CreatePainEducationController(createPainEducationUseCase);
exports.createPainEducationController = createPainEducationController;
