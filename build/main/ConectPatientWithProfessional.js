"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectProfessionalWithPatientController = void 0;
const ConectProfessionalWithPatient_1 = require("../domain/UseCases/ConectProfessionalWithPatient");
const ConectProfessionalWithPatientController_1 = require("../adapters/controllers/ConectProfessionalWithPatientController");
const conectProfessionalWithPatientUseCase = new ConectProfessionalWithPatient_1.ConectProfessionalWithPatient();
const conectProfessionalWithPatientController = new ConectProfessionalWithPatientController_1.ConectProfessionalWithPatientController(conectProfessionalWithPatientUseCase);
exports.conectProfessionalWithPatientController = conectProfessionalWithPatientController;
