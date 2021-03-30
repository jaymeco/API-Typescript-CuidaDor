import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfessionalsPatientsTable1616719695274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'professionals_patients',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isNullable: false
          },
          {
            name: 'professional_id',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'patient_id',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
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
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('professionals_patients')
    }

}
