import { Column, OneToOne, JoinColumn, Entity, PrimaryColumn, OneToMany, ManyToMany } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Accounts } from "./Accounts";
import { ProfessionalPatient } from "./ProfessionalPatient";

@Entity('professionals')
export class Professional{

  @PrimaryColumn()
  public readonly id: string;

  @OneToOne(()=> Accounts)
  @JoinColumn({ name: 'account_id' })
  public account: Accounts;

  @OneToMany(()=> ProfessionalPatient, professionalPatient=> professionalPatient.professional)
  public professional_patients: ProfessionalPatient[];

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
  public experience: string;

  @Column()
  public state: string;

  @Column()
  public city: string;

  @Column()
  public specialization: string;

  @Column()
  public about: string;

  @Column()
  public cpf: string;

  @Column()
  public crm: string;

  @Column()
  public service_locations: string;

  constructor (){
    if(!this.id){
      this.id = uuid();
    }
    this.gender = 'Não informado';
    this.specialization = 'Não informado';
    this.state = 'Não informado';
    this.about = 'Não informado';
    this.experience = 'Não informado';
    this.cpf = 'Não informado';
    this.crm = 'Não informado';
    this.city = 'Não informado';
    this.service_locations = 'Não informado';
  }
}
