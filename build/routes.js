"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const CheckGoals_1 = require("./main/CheckGoals");
const ConectPatientWithProfessional_1 = require("./main/ConectPatientWithProfessional");
const CreateAccountAndPatient_1 = require("./main/CreateAccountAndPatient");
const CreateAccountAndProfessional_1 = require("./main/CreateAccountAndProfessional");
const CreateDailyAssessment_1 = require("./main/CreateDailyAssessment");
const CreateGoal_1 = require("./main/CreateGoal");
const CreatePainEducation_1 = require("./main/CreatePainEducation");
const GetAllPainEducation_1 = require("./main/GetAllPainEducation");
const GetGoals_1 = require("./main/GetGoals");
const GetGraphicThreeValues_1 = require("./main/GetGraphicThreeValues");
const LoginPatient_1 = require("./main/LoginPatient");
const LoginProfessional_1 = require("./main/LoginProfessional");
const routes = express_1.Router();
exports.routes = routes;
routes.post('/patients', (request, response) => {
    return CreateAccountAndPatient_1.createAccountPatientController.handle(request, response);
});
routes.post('/professionals', (request, response) => {
    return CreateAccountAndProfessional_1.createAccountAndProfessional.handle(request, response);
});
routes.post('/login/patient', (request, response) => {
    return LoginPatient_1.loginPatientController.handle(request, response);
});
routes.post('/login/professional', (request, response) => {
    return LoginProfessional_1.loginProfessionalController.handle(request, response);
});
routes.post('/goals', (request, response) => {
    return CreateGoal_1.createGoalController.handle(request, response);
});
routes.post('/conect_professional_patient', (request, response) => {
    return ConectPatientWithProfessional_1.conectProfessionalWithPatientController.handle(request, response);
});
routes.get('/goals/:id', (request, response) => {
    return GetGoals_1.getGoalsController.handle(request, response);
});
routes.patch('/goals', (request, response) => {
    return CheckGoals_1.checkGoalsController.handle(request, response);
});
routes.post('/daily_assessment', (request, response) => {
    return CreateDailyAssessment_1.createDaliyAssessmentController.handle(request, response);
});
routes.get('/graphics/3/:id', (request, response) => {
    return GetGraphicThreeValues_1.getGraphicThreeValuesController.handle(request, response);
});
routes.post('/pain_education', (request, response) => {
    return CreatePainEducation_1.createPainEducationController.handle(request, response);
});
routes.get('/pain_education', (request, response) => {
    return GetAllPainEducation_1.getAllPainEducationController.handle(request, response);
});
