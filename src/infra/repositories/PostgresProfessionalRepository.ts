import { EntityRepository, Repository } from "typeorm";
import { Professional } from "../../domain/entities/Professional";

@EntityRepository(Professional)
export class PostgresProfessionalRepository extends Repository<Professional> {}
