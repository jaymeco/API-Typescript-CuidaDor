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
          default: 'Não informado'
        },
        {
          name: 'birthday',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'occupation',
          type: 'varchar',
          default: 'Não informado'
        },
        {
          name: 'state',
          type: 'varchar',
          default: 'Não informado'
        },
        {
          name: 'city',
          type: 'varchar',
          default: 'Não informado'
        },
        {
          name: 'weight',
          type: 'varchar',
          default: 'Não informado'
        },
        {
          name: 'height',
          type: 'varchar',
          default: 'Não informado'
        },
        {
          name: 'imc',
          type: 'int',
          default: 'Não informado'
        },
        {
          name: 'blood_type',
          type: 'varchar',
          default: 'Não informado'
        },
        {
          name: 'condition',
          type: 'varchar',
          default: 'Não informado'
        },
        {
          name: 'cpf',
          type: 'varchar',
          default: 'Não informado'
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
