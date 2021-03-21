import { Router } from 'express';
import { createAccountPatientController } from './main/CreateAccountAndPatient';
const routes = Router();

routes.post('/patients', (request, response)=>{
  return createAccountPatientController.handle(request, response);
})

export { routes };
