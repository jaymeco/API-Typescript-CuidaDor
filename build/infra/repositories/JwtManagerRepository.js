"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtManagerRepository = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtManagerRepository {
    generateToken(id) {
        const token = jsonwebtoken_1.default.sign({ id }, process.env.SECRET || '022dw2daw66dw9adw5a5', {
            expiresIn: 86400,
        });
        return token;
    }
    verifyToken(token) {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET || '022dw2daw66dw9adw5a5');
        if (!decoded) {
            return false;
        }
        return true;
    }
}
exports.JwtManagerRepository = JwtManagerRepository;
