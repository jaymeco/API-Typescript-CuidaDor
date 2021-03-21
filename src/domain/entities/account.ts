import { Column, PrimaryColumn, Entity, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('accounts')
export class Account {

  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @CreateDateColumn()
  public create_at: Date;

  constructor (){
    if(!this.id){
      this.id = uuid();
    }
  }
}
