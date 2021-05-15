"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const account_1 = require("./account");
let Professional = class Professional {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
        this.gender = 'Não informado';
        this.specialization = 'Não informado';
        this.state = 'Não informado';
        this.about = 'Não informado';
        this.experience = 'Não informado';
        this.cpf = 'Não informado';
        this.crm = 'Não informado';
        this.city = 'Não informado';
        this.service_locations = 'Não informado';
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Professional.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => account_1.Account),
    typeorm_1.JoinColumn({ name: 'account_id' }),
    __metadata("design:type", account_1.Account)
], Professional.prototype, "account", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "account_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "birthday", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "experience", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "specialization", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "about", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "crm", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Professional.prototype, "service_locations", void 0);
Professional = __decorate([
    typeorm_1.Entity('professionals'),
    __metadata("design:paramtypes", [])
], Professional);
exports.Professional = Professional;
