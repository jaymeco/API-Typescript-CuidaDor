import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGoalTable1616689277047 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'goals',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'content',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'checked',
          type: 'boolean',
          isNullable: false
        },
        {
          name: 'patient_id',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'professional_id',
          type: 'varchar',
          isNullable: false
        }
      ],
      foreignKeys: [
        {
          name: 'FKPatient',
          referencedTableName: 'patients',
          referencedColumnNames: ['id'],
          columnNames: ['patient_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        {
          name: 'FKProfessional',
          referencedTableName: 'professionals',
          referencedColumnNames: ['id'],
          columnNames: ['professional_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('goals');
  }

}
