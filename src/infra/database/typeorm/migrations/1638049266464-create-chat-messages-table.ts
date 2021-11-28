import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createChatMessagesTable1638049266464 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'chat_messages',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
        },
        {
          name: 'chat_room',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'message',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'socket_id',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'userName',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'userId',
          type: 'varchar',
          isNullable: false,
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chat_messages');
  }

}
