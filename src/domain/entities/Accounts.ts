import { Column, PrimaryColumn, Entity, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('account')
export class Accounts {

  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @CreateDateColumn()
  public created_at: Date;

  constructor (){
    if(!this.id){
      this.id = uuid();
    }
  }
}
