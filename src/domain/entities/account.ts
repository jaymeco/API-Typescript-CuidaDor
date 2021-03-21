import { Column, PrimaryColumn, Entity, CreateDateColumn } from 'typeorm';

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
}
