import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableMedications1619490469675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'medications',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          }
          ,
          {
            name: 'dose',
            type: 'varchar',
            isNullable: false
          }
          ,
          {
            name: 'frequency',
            type: 'varchar',
            isNullable: false
          }
          ,
          {
            name: 'patient_id',
            type: 'varchar',
            isNullable: false
          }
        ],
        foreignKeys: [
          {
            name: 'FKPatient',
            referencedTableName: 'patient',
            referencedColumnNames: ['id'],
            columnNames: ['patient_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('medications');
    }

}
