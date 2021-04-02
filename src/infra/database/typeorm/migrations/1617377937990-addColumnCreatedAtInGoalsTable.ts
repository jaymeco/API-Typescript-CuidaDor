import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnCreatedAtInGoalsTable1617377937990 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('goals', new TableColumn({
      name: 'created_at',
      type: 'timestamp',
      default: 'now()'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('goals', 'created_at');
  }

}
