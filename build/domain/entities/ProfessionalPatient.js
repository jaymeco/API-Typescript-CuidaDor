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
exports.ProfessionalPatient = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Patient_1 = require("./Patient");
const Professional_1 = require("./Professional");
let ProfessionalPatient = class ProfessionalPatient {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ProfessionalPatient.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProfessionalPatient.prototype, "professional_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProfessionalPatient.prototype, "patient_id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ProfessionalPatient.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Patient_1.Patient),
    typeorm_1.JoinColumn({ name: 'patient_id' }),
    __metadata("design:type", Patient_1.Patient)
], ProfessionalPatient.prototype, "patient", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Patient_1.Patient),
    typeorm_1.JoinColumn({ name: 'professional_id' }),
    __metadata("design:type", Professional_1.Professional)
], ProfessionalPatient.prototype, "professional", void 0);
ProfessionalPatient = __decorate([
    typeorm_1.Entity('professionals_patients'),
    __metadata("design:paramtypes", [])
], ProfessionalPatient);
exports.ProfessionalPatient = ProfessionalPatient;
