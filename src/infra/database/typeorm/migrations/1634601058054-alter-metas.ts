import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class alterMetas1634601058054 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('goals', 'runtime');
    await queryRunner.addColumn('goals', new TableColumn({
      name: 'dataInicio',
      type: 'date',
      isNullable: false,
    }));
    await queryRunner.addColumn('goals', new TableColumn({
      name: 'dataFinal',
      type: 'date',
      isNullable: false,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('goals', new TableColumn({
      name: 'runtime',
      type: 'int',
      isNullable: true,
    }));
  }

}
