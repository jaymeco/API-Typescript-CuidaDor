import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnsFrequencyAndRuntime1618942209578 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE goals ADD frequency_per_week int ;');
    await queryRunner.query('ALTER TABLE goals ADD runtime int ;');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE goals DROP COLUMN frequency_per_week;');
    await queryRunner.query('ALTER TABLE goals DROP COLUMN runtime;');
  }

}
