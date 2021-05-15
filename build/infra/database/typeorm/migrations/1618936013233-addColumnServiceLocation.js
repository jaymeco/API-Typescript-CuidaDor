"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addColumnServiceLocation1618936013233 = void 0;
const typeorm_1 = require("typeorm");
class addColumnServiceLocation1618936013233 {
    async up(queryRunner) {
        await queryRunner.addColumn('professionals', new typeorm_1.TableColumn({
            name: 'service_locations',
            type: 'varchar',
            isNullable: true
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('professionals', 'service_locations');
    }
}
exports.addColumnServiceLocation1618936013233 = addColumnServiceLocation1618936013233;
