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
exports.DailyAssessment = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Patient_1 = require("./Patient");
let DailyAssessment = class DailyAssessment {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], DailyAssessment.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(() => Patient_1.Patient, patient => patient.daily_assessments),
    typeorm_1.JoinColumn({ name: 'patient_id' }),
    __metadata("design:type", Patient_1.Patient)
], DailyAssessment.prototype, "patient", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DailyAssessment.prototype, "patient_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], DailyAssessment.prototype, "question_01", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DailyAssessment.prototype, "question_02", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_03", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_04", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_05", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_06", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_07", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_08", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_09", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_10", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DailyAssessment.prototype, "question_11", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], DailyAssessment.prototype, "created_at", void 0);
DailyAssessment = __decorate([
    typeorm_1.Entity('daily_assessments'),
    __metadata("design:paramtypes", [])
], DailyAssessment);
exports.DailyAssessment = DailyAssessment;
