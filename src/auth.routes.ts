import { Router } from 'express';
import { authMiddleware } from './main/AuthRoutes';
import { checkGoalsController } from './main/CheckGoals';
import { conectProfessionalWithPatientController } from './main/ConectPatientWithProfessional';
import { createDaliyAssessmentController } from './main/CreateDailyAssessment';
import { createGoalController } from './main/CreateGoal';
import { createPainEducationController } from './main/CreatePainEducation';
import { getAllPainEducationController } from './main/GetAllPainEducation';
import { getGoalsController } from './main/GetGoals';
import { getGraphicThreeValuesController } from './main/GetGraphicThreeValues';

const authRoutes = Router();

authRoutes.use(authMiddleware.handle);

authRoutes.post('/goals', (request, response)=>{
  return createGoalController.handle(request, response);
});

authRoutes.post('/conect_professional_patient', (request, response)=>{
  return conectProfessionalWithPatientController.handle(request, response);
});

authRoutes.get('/goals/:id', (request, response)=>{
  return getGoalsController.handle(request, response);
});

authRoutes.patch('/goals', (request, response)=>{
  return checkGoalsController.handle(request, response);
});

authRoutes.post('/daily_assessment', (request, response)=>{
  return createDaliyAssessmentController.handle(request, response);
});

authRoutes.get('/graphics/3/:id', (request, response)=>{
  return getGraphicThreeValuesController.handle(request, response);
});

authRoutes.post('/pain_education', (request, response)=>{
  return createPainEducationController.handle(request, response);
});

authRoutes.get('/pain_education', (request, response)=>{
  return getAllPainEducationController.handle(request, response);
});

export { authRoutes };
