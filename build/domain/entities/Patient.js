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
exports.Patient = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Account_1 = require("./Account");
const DailyAssessment_1 = require("./DailyAssessment");
const Medications_1 = require("./Medications");
let Patient = class Patient {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
        this.gender = 'Não informado';
        this.height = 'Não informado';
        this.state = 'Não informado';
        this.weight = 'Não informado';
        this.occupation = 'Não informado';
        this.imc = 0;
        this.condition = 'Não informado';
        this.blood_type = 'Não informado';
        this.cpf = 'Não informado';
        this.city = 'Não informado';
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Patient.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => Account_1.Account),
    typeorm_1.JoinColumn({ name: 'account_id' }),
    __metadata("design:type", Account_1.Account)
], Patient.prototype, "account", void 0);
__decorate([
    typeorm_1.OneToMany(() => Medications_1.Medications, medications => medications.patient),
    __metadata("design:type", Array)
], Patient.prototype, "medications", void 0);
__decorate([
    typeorm_1.ManyToOne(() => DailyAssessment_1.DailyAssessment, dailyAssessment => dailyAssessment.patient),
    __metadata("design:type", Array)
], Patient.prototype, "daily_assessments", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "account_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "birthday", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "occupation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "weight", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "height", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Patient.prototype, "imc", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "blood_type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "condition", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "cpf", void 0);
Patient = __decorate([
    typeorm_1.Entity('patients'),
    __metadata("design:paramtypes", [])
], Patient);
exports.Patient = Patient;
