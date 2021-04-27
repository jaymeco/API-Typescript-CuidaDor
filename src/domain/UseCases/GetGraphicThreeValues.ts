import { getCustomRepository } from "typeorm";
import { PostgresDailyAssessmentRespository } from "../../infra/repositories/PostgresDailyAssessment";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { DailyAssessment } from "../entities/DailyAssessment";

interface IQuestion {
  days: number[];
  intensities: number[];
}

export class GetGraphicThreeValues {
  async execute(patient_id: string, year: string): Promise<any> {
    const dailyAssessmentRepository = getCustomRepository(PostgresDailyAssessmentRespository);
    const patientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await patientRepository.findOne({ id: patient_id });

    if (!patientExists) {
      throw new Error('This patient does not exists!');
    }

    const dailies = await dailyAssessmentRepository.find({
      patient_id
    });

    const dailiesByYear = dailies.map(daily => {
      let dailyYear = new Date(daily.created_at).getFullYear();
      if (dailyYear === Number(year)) {
        return daily;
      }
    }) as DailyAssessment[];

    let month: Array<IQuestion[]> = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];

    for (let i = 5; i <= 11; i +=1) {
      let dailyMonth = 0;
      let question: IQuestion = {
        days: [],
        intensities: []
      };
      dailiesByYear.map((daily) => {
        dailyMonth = new Date(daily.created_at).getMonth();
        let dailyDate = new Date(daily.created_at).getDate() - 1;

        question.days.push(dailyDate);

        if (i <= 9) {
          question.intensities.push(daily[`question_0${i}` as 'question_05']);
        } else {
          question.intensities.push(daily[`question_${i}` as 'question_05']);
        }

      });
      month[dailyMonth].push(question);
    }

    return month;

  }
}
