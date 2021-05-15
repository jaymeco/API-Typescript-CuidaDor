"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessionalsPatientsTable1616719695274 = void 0;
const typeorm_1 = require("typeorm");
class CreateProfessionalsPatientsTable1616719695274 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'professionals_patients',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'professional_id',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'patient_id',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys: [
                {
                    name: 'FKPatient',
                    referencedTableName: 'patients',
                    referencedColumnNames: ['id'],
                    columnNames: ['patient_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'FKProfessional',
                    referencedTableName: 'professionals',
                    referencedColumnNames: ['id'],
                    columnNames: ['professional_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('professionals_patients');
    }
}
exports.CreateProfessionalsPatientsTable1616719695274 = CreateProfessionalsPatientsTable1616719695274;
