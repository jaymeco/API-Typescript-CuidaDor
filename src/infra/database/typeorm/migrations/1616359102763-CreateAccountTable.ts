import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAccountTable1616359102763 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'account',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false
        }
        ,
        {
          name: 'password',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('account');
  }

}
