import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProfessionalTable1616540049764 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'professionals',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'account_id',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'first_name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'last_name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'gender',
          type: 'varchar',
        },
        {
          name: 'birthday',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'specialization',
          type: 'varchar',
        },
        {
          name: 'state',
          type: 'varchar',
        },
        {
          name: 'city',
          type: 'varchar',
        },
        {
          name: 'about',
          type: 'varchar',
        },
        {
          name: 'experience',
          type: 'varchar',
        },
        {
          name: 'crm',
          type: 'int',
        },
        {
          name: 'cpf',
          type: 'varchar',
        }
      ],
      foreignKeys: [
        {
          name: 'FKAccount',
          referencedTableName: 'account',
          referencedColumnNames: ['id'],
          columnNames: ['account_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('professionals');
  }

}
