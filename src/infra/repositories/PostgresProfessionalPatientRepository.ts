import { EntityRepository, Repository } from "typeorm";
import { ProfessionalPatient } from "../../domain/entities/ProfessionalPatient";

@EntityRepository(ProfessionalPatient)
export class PostgresProfessionalPatientRepository extends Repository<ProfessionalPatient> {}
