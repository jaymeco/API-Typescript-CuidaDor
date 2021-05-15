"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginProfessional = void 0;
const typeorm_1 = require("typeorm");
const PostgresAccountRepository_1 = require("../../infra/repositories/PostgresAccountRepository");
const PostgresProfessionalRepository_1 = require("../../infra/repositories/PostgresProfessionalRepository");
const comparePassword_1 = __importDefault(require("../../infra/utils/comparePassword"));
class LoginProfessional {
    constructor(jwtManagerRepository) {
        this.jwtManagerRepository = jwtManagerRepository;
    }
    async execute(data) {
        const postgresAccountRepository = typeorm_1.getCustomRepository(PostgresAccountRepository_1.PostgresAccountRepository);
        const postgresProfessionalRepository = typeorm_1.getCustomRepository(PostgresProfessionalRepository_1.PostgresProfessionalRepository);
        const accountExists = await postgresAccountRepository.findOne({ email: data.email });
        if (!accountExists) {
            throw new Error('Email or Password are invalid!');
        }
        if (!await comparePassword_1.default(accountExists.password, data.password)) {
            throw new Error('Email or Password are invalid!');
        }
        const professional = await postgresProfessionalRepository.findOne({ account_id: accountExists.id });
        if (!professional) {
            throw new Error('Email or Password are invalid!');
        }
        const token = this.jwtManagerRepository.generateToken(accountExists.id);
        return {
            role: 'Professional',
            token,
            user: Object.assign(accountExists, professional),
        };
    }
}
exports.LoginProfessional = LoginProfessional;
