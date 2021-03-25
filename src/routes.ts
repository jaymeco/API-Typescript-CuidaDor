import { Router } from 'express';
import { createAccountPatientController } from './main/CreateAccountAndPatient';
import { createAccountAndProfessional } from './main/CreateAccountAndProfessional';
import { createGoalController } from './main/CreateGoal';
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

export { routes };
