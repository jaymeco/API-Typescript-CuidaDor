"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addColumnCreatedAtInGoalsTable1617377937990 = void 0;
const typeorm_1 = require("typeorm");
class addColumnCreatedAtInGoalsTable1617377937990 {
    async up(queryRunner) {
        await queryRunner.addColumn('goals', new typeorm_1.TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('goals', 'created_at');
    }
}
exports.addColumnCreatedAtInGoalsTable1617377937990 = addColumnCreatedAtInGoalsTable1617377937990;
