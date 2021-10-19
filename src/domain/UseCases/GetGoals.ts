import { getCustomRepository } from "typeorm";
import { PostgresGoalRepository } from "../../infra/repositories/PostgresGoalRepository";
import { PostgresPatientRepository } from "../../infra/repositories/PostgresPatientRepository";
import { Goal } from "../entities/Goal";

interface Response {
  emAndamento: Goal[],
  concluidos: Goal[],
  naoConcluidos: Goal[],
}
export class GetGoals {
  async execute(patient_id: string): Promise<Response> {
    const postgresGoalRepository = getCustomRepository(PostgresGoalRepository);
    const postgresPatientRepository = getCustomRepository(PostgresPatientRepository);

    const patientExists = await postgresPatientRepository.findOne({ id: patient_id });

    if (!patientExists) {
      throw new Error('This patient does not exists!');
    }

    const goals = await postgresGoalRepository.find({
      where: { patient_id: patient_id }
    });

    let emAndamento: Goal[] = [];
    let concluidos: Goal[] = [];
    let naoConcluidos: Goal[] = [];

    goals.forEach(goal => {
      if (goal.checked) {
        concluidos.push(goal);
      }
      if(!goal.checked) {
        const dataAtual = new Date().getTime();
        const dataInicio = new Date(goal.dataInicio).getTime();
        const dataFinal = new Date(goal.dataFinal).getTime();

        if(dataAtual >= dataFinal) {
          naoConcluidos.push(goal);
          return;
        }
        emAndamento.push(goal);
      }
    })

    return {
      emAndamento,
      concluidos,
      naoConcluidos,
    };
  }
}
