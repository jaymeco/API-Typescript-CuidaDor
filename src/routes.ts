import { Router } from 'express';
import { createAccountPatientController } from './main/CreateAccountAndPatient';
import { createAccountAndProfessional } from './main/CreateAccountAndProfessional';
const routes = Router();

routes.post('/patients', (request, response)=>{
  return createAccountPatientController.handle(request, response);
});

routes.post('/professionals', (request, response)=>{
  return createAccountAndProfessional.handle(request, response);
})

export { routes };
