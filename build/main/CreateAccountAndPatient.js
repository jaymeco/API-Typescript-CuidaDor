"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountPatientController = void 0;
const CreateAccont_1 = require("../domain/UseCases/CreateAccont");
const CreatePatient_1 = require("../domain/UseCases/CreatePatient");
const CreateAccountAndPatient_1 = require("../adapters/controllers/CreateAccountAndPatient");
const createAccountUseCase = new CreateAccont_1.CreateAccount();
const createPatientUseCase = new CreatePatient_1.CreatePatient();
const createAccountPatientController = new CreateAccountAndPatient_1.CreateAccountAndPatient(createAccountUseCase, createPatientUseCase);
exports.createAccountPatientController = createAccountPatientController;
