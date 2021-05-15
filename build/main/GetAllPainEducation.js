"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPainEducationController = void 0;
const GetAllPainEducation_1 = require("../domain/UseCases/GetAllPainEducation");
const GetAllPainEducationController_1 = require("../adapters/controllers/GetAllPainEducationController");
const getAllPainEducationUseCase = new GetAllPainEducation_1.GetAllPainEducation();
const getAllPainEducationController = new GetAllPainEducationController_1.GetAllPainEducationController(getAllPainEducationUseCase);
exports.getAllPainEducationController = getAllPainEducationController;
