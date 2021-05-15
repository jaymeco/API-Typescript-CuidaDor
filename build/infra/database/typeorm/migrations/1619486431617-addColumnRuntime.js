"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addColumnRuntime1619486431617 = void 0;
const typeorm_1 = require("typeorm");
class addColumnRuntime1619486431617 {
    async up(queryRunner) {
        await queryRunner.addColumn('goals', new typeorm_1.TableColumn({
            name: 'runtime',
            type: 'int',
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('goals', 'frequency_per_week');
    }
}
exports.addColumnRuntime1619486431617 = addColumnRuntime1619486431617;
