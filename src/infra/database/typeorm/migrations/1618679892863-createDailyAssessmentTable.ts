import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDailyAssessmentTable1618679892863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'daily_assessments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isNullable: false
          },
          {
            name: 'patient_id',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'question_01',
            type: 'boolean',
            isNullable: false
          },
          {
            name: 'question_02',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'question_03',
            type: 'int',
            isNullable: false
          },
          {
            name: 'question_04',
            type: 'int',
            isNullable: false
          },
          {
            name: 'question_05',
            type: 'int',
            isNullable: false
          },
          {
            name: 'question_06',
            type: 'int',
            isNullable: false
          },
          {
            name: 'question_07',
            type: 'int',
            isNullable: false
          },
          {
            name: 'question_08',
            type: 'int',
            isNullable: false
          },
          {
            name: 'question_09',
            type: 'int',
            isNullable: false
          },
          {
            name: 'question_10',
            type: 'int',
            isNullable: false
          },
          {
            name: 'question_11',
            type: 'int',
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
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('daily_assessments');
    }

}
