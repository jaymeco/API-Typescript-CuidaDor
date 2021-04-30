import { Column, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Patient } from "./Patient";

export class Medications {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public name: string;

  @Column()
  public dose: string;

  @Column()
  public frequency: string;

  @Column()
  public patient_id: string;

  @OneToMany(()=>Patient, patient => patient.medications)
  @JoinColumn({ name: 'patient_id' })
  public patient: Patient;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}
