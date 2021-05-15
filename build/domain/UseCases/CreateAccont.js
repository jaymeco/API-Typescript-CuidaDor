"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = void 0;
const typeorm_1 = require("typeorm");
const PostgresAccountRepository_1 = require("../../infra/repositories/PostgresAccountRepository");
const hashpassword_1 = __importDefault(require("../../infra/utils/hashpassword"));
class CreateAccount {
    async execute(data) {
        const postgresAccountRepository = typeorm_1.getCustomRepository(PostgresAccountRepository_1.PostgresAccountRepository);
        const accountExists = await postgresAccountRepository.findOne({ email: data.email });
        if (accountExists) {
            throw new Error('This account already exists!');
        }
        data.password = await hashpassword_1.default(data.password);
        const account = postgresAccountRepository.create({
            email: data.email,
            password: data.password
        });
        return await postgresAccountRepository.save(account);
    }
}
exports.CreateAccount = CreateAccount;
