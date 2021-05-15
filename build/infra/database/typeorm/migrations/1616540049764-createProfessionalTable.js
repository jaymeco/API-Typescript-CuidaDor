"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfessionalTable1616540049764 = void 0;
const typeorm_1 = require("typeorm");
class createProfessionalTable1616540049764 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'professionals',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: 'account_id',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'first_name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'last_name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'gender',
                    type: 'varchar',
                },
                {
                    name: 'birthday',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'specialization',
                    type: 'varchar',
                },
                {
                    name: 'state',
                    type: 'varchar',
                },
                {
                    name: 'city',
                    type: 'varchar',
                },
                {
                    name: 'about',
                    type: 'varchar',
                },
                {
                    name: 'experience',
                    type: 'varchar',
                },
                {
                    name: 'crm',
                    type: 'int',
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                }
            ],
            foreignKeys: [
                {
                    name: 'FKAccount',
                    referencedTableName: 'account',
                    referencedColumnNames: ['id'],
                    columnNames: ['account_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('professionals');
    }
}
exports.createProfessionalTable1616540049764 = createProfessionalTable1616540049764;
