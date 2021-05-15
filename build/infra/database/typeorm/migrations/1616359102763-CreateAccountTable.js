"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountTable1616359102763 = void 0;
const typeorm_1 = require("typeorm");
class CreateAccountTable1616359102763 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'account',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('account');
    }
}
exports.CreateAccountTable1616359102763 = CreateAccountTable1616359102763;
