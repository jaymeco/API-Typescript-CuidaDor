import { Column, PrimaryColumn, Entity, OneToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Account } from './Account';

@Entity('patients')
export class Patient {
  @PrimaryColumn()
  public readonly id: string;

  @OneToOne(()=> Account)
  @JoinColumn({ name: 'account_id' })
  public account: Account;

  @Column()
  public account_id: string;

  @Column()
  public first_name: string;

  @Column()
  public last_name: string;

  @Column()
  public gender: string;

  @Column()
  public birthday: string;

  @Column()
  public occupation: string;

  @Column()
  public state: string;

  @Column()
  public city: string;

  @Column()
  public weight: string;

  @Column()
  public height: string;

  @Column()
  public imc: number;

  @Column()
  public blood_type: string;

  @Column()
  public condition: string;

  @Column()
  public cpf: string;

  constructor (){
    if(!this.id){
      this.id = uuid();

    }
    this.gender = 'Não informado';
    this.height = 'Não informado';
    this.state = 'Não informado';
    this.weight = 'Não informado';
    this.occupation = 'Não informado';
    this.imc = 0;
    this.condition = 'Não informado';
    this.blood_type = 'Não informado';
    this.cpf = 'Não informado';
    this.city = 'Não informado';
  }
}
