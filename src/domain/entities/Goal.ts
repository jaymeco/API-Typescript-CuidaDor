import { PrimaryColumn, Entity, Column, JoinColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Patient } from './Patient';
import { Professional } from './Professional';

@Entity('goals')
export class Goal {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public content: string;

  @Column()
  public checked: boolean;

  @CreateDateColumn()
  public created_at: Date;

  @Column()
  public patient_id: string;

  @Column()
  public professional_id: string;

  @ManyToOne(()=> Patient)
  @JoinColumn({ name: 'patient_id' })
  public patient: Patient;

  @ManyToOne(()=> Professional)
  @JoinColumn({ name: 'professional_id' })
  public professional: Professional;

  @Column()
  public frenquency_per_week: number;

  @Column()
  public runtime: number;

  constructor () {
    if(!this.id){
      this.id = uuid();
    }

    this.checked = false;
  }
}
