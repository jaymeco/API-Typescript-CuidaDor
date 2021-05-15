"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGoalTable1616689277047 = void 0;
const typeorm_1 = require("typeorm");
class CreateGoalTable1616689277047 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'goals',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: 'content',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'checked',
                    type: 'boolean',
                    isNullable: false
                },
                {
                    name: 'patient_id',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'professional_id',
                    type: 'varchar',
                    isNullable: false
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
        await queryRunner.dropTable('goals');
    }
}
exports.CreateGoalTable1616689277047 = CreateGoalTable1616689277047;
