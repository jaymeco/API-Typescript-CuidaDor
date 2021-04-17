import { Column, PrimaryColumn, Entity, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Patient } from './Patient';

@Entity('daily_assessments')
export class DailyAssessment {
  @PrimaryColumn()
  public readonly id: string;

  @ManyToOne(()=> Patient)
  @JoinColumn({ name: 'patient_id' })
  public patient: Patient

  @Column()
  public patient_id: string;

  @Column()
  public question_01: boolean;

  @Column()
  public question_02: string;

  @Column()
  public question_03: number;

  @Column()
  public question_04: number;

  @Column()
  public question_05: number;

  @Column()
  public question_06: number;

  @Column()
  public question_07: number;

  @Column()
  public question_08: number;

  @Column()
  public question_09: number;

  @Column()
  public question_10: number;

  @Column()
  public question_11: number;

  @CreateDateColumn()
  public created_at: Date;
}
