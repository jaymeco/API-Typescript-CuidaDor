"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPatient = void 0;
const typeorm_1 = require("typeorm");
const PostgresAccountRepository_1 = require("../../infra/repositories/PostgresAccountRepository");
const PostgresPatientRepository_1 = require("../../infra/repositories/PostgresPatientRepository");
const comparePassword_1 = __importDefault(require("../../infra/utils/comparePassword"));
class LoginPatient {
    constructor(jwtManagerRepository) {
        this.jwtManagerRepository = jwtManagerRepository;
    }
    async execute(data) {
        const postgresAccountRepository = typeorm_1.getCustomRepository(PostgresAccountRepository_1.PostgresAccountRepository);
        const postgresPatientRepository = typeorm_1.getCustomRepository(PostgresPatientRepository_1.PostgresPatientRepository);
        const accountExists = await postgresAccountRepository.findOne({
            where: { email: data.email }
        });
        if (!accountExists) {
            throw new Error('Email or Password are invalid!');
        }
        if (!await comparePassword_1.default(accountExists.password, data.password)) {
            throw new Error('Email or Password are invalid!');
        }
        const patient = await postgresPatientRepository.findOne({ account_id: accountExists.id });
        if (!patient) {
            throw new Error('Email or Password are invalid!');
        }
        const token = this.jwtManagerRepository.generateToken(accountExists.id);
        return {
            role: 'Patient',
            token,
            user: Object.assign(accountExists, patient),
        };
    }
}
exports.LoginPatient = LoginPatient;
