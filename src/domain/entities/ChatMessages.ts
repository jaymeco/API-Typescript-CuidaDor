import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('chat_messages')
export class ChatMessages {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public chat_room: string;

  @Column()
  public message: string;

  @Column()
  public socket_id: string;

  @Column()
  public created_at: string;

  @Column()
  public userName: string;

  @Column()
  public userId: string;

}
