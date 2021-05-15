import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnRuntime1619486431617 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('goals', new TableColumn({
        name: 'runtime',
        type: 'int',
        isNullable: true,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('goals', 'frequency_per_week');
    }

}
