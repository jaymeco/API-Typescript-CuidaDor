import { Router } from 'express';
import { checkGoalsController } from './main/CheckGoals';
import { conectProfessionalWithPatientController } from './main/ConectPatientWithProfessional';
import { createAccountPatientController } from './main/CreateAccountAndPatient';
import { createAccountAndProfessional } from './main/CreateAccountAndProfessional';
import { createDaliyAssessmentController } from './main/CreateDailyAssessment';
import { createGoalController } from './main/CreateGoal';
import { createPainEducationController } from './main/CreatePainEducation';
import { getAllPainEducationController } from './main/GetAllPainEducation';
import { getGoalsController } from './main/GetGoals';
import { getGraphicThreeValuesController } from './main/GetGraphicThreeValues';
import { loginPatientController } from './main/LoginPatient';
import { loginProfessionalController } from './main/LoginProfessional';
const routes = Router();

routes.post('/patients', (request, response)=>{
  return createAccountPatientController.handle(request, response);
});

routes.post('/professionals', (request, response)=>{
  return createAccountAndProfessional.handle(request, response);
});

routes.post('/login/patient', (request, response)=>{
  return loginPatientController.handle(request, response);
});

routes.post('/login/professional', (request, response)=>{
  return loginProfessionalController.handle(request, response);
});

routes.post('/goals', (request, response)=>{
  return createGoalController.handle(request, response);
});

routes.post('/conect_professional_patient', (request, response)=>{
  return conectProfessionalWithPatientController.handle(request, response);
});

routes.get('/goals/:id', (request, response)=>{
  return getGoalsController.handle(request, response);
});

routes.patch('/goals', (request, response)=>{
  return checkGoalsController.handle(request, response);
});

routes.post('/daily_assessment', (request, response)=>{
  return createDaliyAssessmentController.handle(request, response);
});

routes.get('/graphics/3/:id', (request, response)=>{
  return getGraphicThreeValuesController.handle(request, response);
});

routes.post('/pain_education', (request, response)=>{
  return createPainEducationController.handle(request, response);
});

routes.get('/pain_education', (request, response)=>{
  return getAllPainEducationController.handle(request, response);
});

export { routes };
