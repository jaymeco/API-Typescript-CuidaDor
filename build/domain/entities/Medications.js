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
exports.Medications = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Patient_1 = require("./Patient");
let Medications = class Medications {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Medications.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Medications.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Medications.prototype, "dose", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Medications.prototype, "frequency", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Medications.prototype, "patient_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Patient_1.Patient, patient => patient.medications),
    typeorm_1.JoinColumn({ name: 'patient_id' }),
    __metadata("design:type", Patient_1.Patient)
], Medications.prototype, "patient", void 0);
Medications = __decorate([
    typeorm_1.Entity('medications'),
    __metadata("design:paramtypes", [])
], Medications);
exports.Medications = Medications;
