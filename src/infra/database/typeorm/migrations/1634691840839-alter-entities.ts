import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterEntities1634691840839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('professionals', 'experience');
      await queryRunner.addColumn('professionals', new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }));
      await queryRunner.addColumn('professionals', new TableColumn({
        name: 'telefone',
        type: 'varchar',
        isNullable: true,
      }));
      await queryRunner.addColumn('professionals', new TableColumn({
        name: 'profissao',
        type: 'varchar',
        isNullable: true,
      }));
      await queryRunner.addColumn('patients', new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('professionals', new TableColumn({
        name: 'experience',
        type: 'varchar',
        isNullable: true,
      }));
      await queryRunner.dropColumn('professionals', 'telefone');
      await queryRunner.dropColumn('professionals', 'profissao');
      await queryRunner.dropColumn('professionals', 'avatar');
      await queryRunner.dropColumn('patients', 'avatar');
    }

}
