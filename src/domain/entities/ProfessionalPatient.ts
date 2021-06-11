import { PrimaryColumn, Column, CreateDateColumn, JoinColumn, Entity, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Patient } from './Patient';
import { Professional } from './Professional';

@Entity('professionals_patients')
export class ProfessionalPatient {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public professional_id: string;

  @Column()
  public patient_id: string;

  @CreateDateColumn()
  public created_at: Date;

  @ManyToOne(()=> Patient, patient=>patient.professional_patients)

  public patient: Patient;

  @ManyToOne(()=> Professional, professional=>professional.professional_patients)
  @JoinColumn({ name: 'professional_id' })
  public professional: Professional;

  constructor () {
    if(!this.id) {
      this.id = uuid();
    }
  }
}
