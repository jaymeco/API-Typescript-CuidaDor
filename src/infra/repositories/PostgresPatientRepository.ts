import { EntityRepository, Repository } from "typeorm";
import { Patient } from "../../domain/entities/Patient";

@EntityRepository(Patient)
export class PostgresPatientRepository extends Repository<Patient> {}
