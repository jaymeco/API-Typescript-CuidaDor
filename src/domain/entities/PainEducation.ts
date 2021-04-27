import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('pain_education')
export class PainEducation {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public link: string;

  @Column()
  public image: string;

  @CreateDateColumn()
  public created_at: Date;

  constructor(){
    if(!this.id) {
      this.id = uuid();
    }
  }
}
