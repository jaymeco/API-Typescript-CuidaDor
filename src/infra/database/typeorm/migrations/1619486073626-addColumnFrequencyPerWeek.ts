import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnFrequencyPerWeek1619486073626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('goals', new TableColumn({
        name: 'frequency_per_week',
        type: 'int',
        isNullable: true,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('goals', 'frequency_per_week');
    }

}
