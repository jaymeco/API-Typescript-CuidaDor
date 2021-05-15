"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTablePainEducation1619482338655 = void 0;
const typeorm_1 = require("typeorm");
class createTablePainEducation1619482338655 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'pain_education',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'link',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'image',
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
    }
}
exports.createTablePainEducation1619482338655 = createTablePainEducation1619482338655;
