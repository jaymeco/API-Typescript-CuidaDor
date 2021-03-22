import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPatientTable1616425940216 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'patients',
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
          name: 'occupation',
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
          name: 'weight',
          type: 'varchar',
        },
        {
          name: 'height',
          type: 'varchar',
        },
        {
          name: 'imc',
          type: 'int',
        },
        {
          name: 'blood_type',
          type: 'varchar',
        },
        {
          name: 'condition',
          type: 'varchar',
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
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patients');
  }

}
