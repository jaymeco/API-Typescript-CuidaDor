import { EntityRepository, Repository } from "typeorm";
import { DailyAssessment } from "../../domain/entities/DailyAssessment";

@EntityRepository(DailyAssessment)
export class PostgresDailyAssessmentRespository extends Repository<DailyAssessment> {}
