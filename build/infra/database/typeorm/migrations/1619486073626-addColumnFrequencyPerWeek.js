"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addColumnFrequencyPerWeek1619486073626 = void 0;
const typeorm_1 = require("typeorm");
class addColumnFrequencyPerWeek1619486073626 {
    async up(queryRunner) {
        await queryRunner.addColumn('goals', new typeorm_1.TableColumn({
            name: 'frequency_per_week',
            type: 'int',
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('goals', 'frequency_per_week');
    }
}
exports.addColumnFrequencyPerWeek1619486073626 = addColumnFrequencyPerWeek1619486073626;
