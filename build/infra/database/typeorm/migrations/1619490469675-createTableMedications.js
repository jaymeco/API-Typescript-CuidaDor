"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableMedications1619490469675 = void 0;
const typeorm_1 = require("typeorm");
class createTableMedications1619490469675 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'medications',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'dose',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'frequency',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'patient_id',
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
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('medications');
    }
}
exports.createTableMedications1619490469675 = createTableMedications1619490469675;
