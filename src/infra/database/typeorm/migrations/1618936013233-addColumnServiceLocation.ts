import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnServiceLocation1618936013233 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('professionals', new TableColumn({
        name: 'service_locations',
        type: 'varchar',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('professionals', 'service_locations')
    }

}
