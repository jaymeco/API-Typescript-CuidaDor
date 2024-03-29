import { Router } from 'express';
import { authMiddleware } from './main/AuthRoutes';
import { checkGoalsController } from './main/CheckGoals';
import { conectProfessionalWithPatientController } from './main/ConectPatientWithProfessional';
import { createDaliyAssessmentController } from './main/CreateDailyAssessment';
import { createGoalController } from './main/CreateGoal';
import { createPainEducationController } from './main/CreatePainEducation';
import { getAccessPatientController } from './main/GetAccessPatient';
import { getAllPainEducationController } from './main/GetAllPainEducation';
import { getGoalsController } from './main/GetGoals';
import { getGraphicThreeValuesController } from './main/GetGraphicThreeValues';
import { getPatientsByProfessionalController } from './main/GetPatientsByProfessional';
import { getProfessionalsByPatientsController } from './main/GetProfessionalsByPatients';
import { getPatientController } from './main/GetPatient';
import { getLastAccessController } from './main/GetLastAccess';
import { updatePatientController } from './main/UpdatePatients';
import { getChatsController } from './main/GetChats';
import { getUsersOnChatController } from './main/GetUserOnChat';
import ProfessionalController from './controllers/ProfessionalController';

const authRoutes = Router();

authRoutes.use(authMiddleware.handle);

authRoutes.post('/goals', (request, response) => {
  return createGoalController.handle(request, response);
});

authRoutes.post('/conect_professional_patient', (request, response) => {
  return conectProfessionalWithPatientController.handle(request, response);
});

authRoutes.get('/goals/:patient_id', (request, response) => {
  return getGoalsController.handle(request, response);
});

authRoutes.patch('/goals', (request, response) => {
  return checkGoalsController.handle(request, response);
});

authRoutes.post('/daily_assessment', (request, response) => {
  return createDaliyAssessmentController.handle(request, response);
});

authRoutes.get('/graphics/3/:id', (request, response) => {
  return getGraphicThreeValuesController.handle(request, response);
});

authRoutes.post('/pain_education', (request, response) => {
  return createPainEducationController.handle(request, response);
});

authRoutes.get('/pain_education', (request, response) => {
  return getAllPainEducationController.handle(request, response);
});

authRoutes.get('/patient/:id/professionals', (request, response) => {
  return getProfessionalsByPatientsController.handle(request, response);
});

authRoutes.get('/patient/:patient_id/access', (request, response) => {
  return getAccessPatientController.handle(request, response);
});

authRoutes.get('/professional/:professional_id/patients', (request, response) => {
  return getPatientsByProfessionalController.handle(request, response);
});

authRoutes.get('/patient/:id', (request, response) => {
  return getPatientController.handle(request, response);
});

authRoutes.get('/patient/:patient_id/access/last', (request, response) => {
  return getLastAccessController.handle(request, response);
});

authRoutes.put('/patient/:patient_id', (request, response) => {
  return updatePatientController.handle(request, response);
});

authRoutes.get('/professionals/:professional_id/chats', (request, response) => {
  return getChatsController.handle(request, response);
});

authRoutes.get('/chats/:chat_room', (request, response) => {
  return getUsersOnChatController.handle(request, response);
});

authRoutes.put('/professional/:professional_id', (request, response) => {
  return ProfessionalController.updateProfessional(request, response);
});

export { authRoutes };
