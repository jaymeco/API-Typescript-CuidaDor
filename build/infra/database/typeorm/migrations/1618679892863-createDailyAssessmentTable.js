"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDailyAssessmentTable1618679892863 = void 0;
const typeorm_1 = require("typeorm");
class createDailyAssessmentTable1618679892863 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'daily_assessments',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'patient_id',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'question_01',
                    type: 'boolean',
                    isNullable: false
                },
                {
                    name: 'question_02',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'question_03',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'question_04',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'question_05',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'question_06',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'question_07',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'question_08',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'question_09',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'question_10',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'question_11',
                    type: 'int',
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
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('daily_assessments');
    }
}
exports.createDailyAssessmentTable1618679892863 = createDailyAssessmentTable1618679892863;
