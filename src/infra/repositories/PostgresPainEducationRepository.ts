import { EntityRepository, Repository } from "typeorm";
import { PainEducation } from "../../domain/entities/PainEducation";

@EntityRepository(PainEducation)
export class PostgresPainEducationRepository extends Repository<PainEducation>{}
