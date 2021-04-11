import { Router } from 'express';
import { checkGoalsController } from './main/CheckGoals';
import { conectProfessionalWithPatientController } from './main/ConectPatientWithProfessional';
import { createAccountPatientController } from './main/CreateAccountAndPatient';
import { createAccountAndProfessional } from './main/CreateAccountAndProfessional';
import { createGoalController } from './main/CreateGoal';
import { getGoalsController } from './main/GetGoals';
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

routes.patch('/goals/:id', (request, response)=>{
  return checkGoalsController.handle(request, response);
});

export { routes };
