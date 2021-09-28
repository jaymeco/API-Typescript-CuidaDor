import { getCustomRepository } from "typeorm";
import { PostgresDailyAssessmentRespository } from "../../infra/repositories/PostgresDailyAssessment";
import { AccessPatientResponse } from "../DTOs/GetAccessPatient";

export class GetAccessPatient {

  async execute(id: string, data: string): Promise<AccessPatientResponse> {
    const postgresDailyAssessmentRepository = getCustomRepository(PostgresDailyAssessmentRespository);
    const dailiesAssessments = await postgresDailyAssessmentRepository.find({
      where: {
        patient_id: id,
      },
    });

    const avaliacoesFeitas = dailiesAssessments.filter((avalicao) => {
      const avaliacaoMes = new Date(avalicao.created_at).getMonth() + 1;
      const avaliacaoAno = new Date(avalicao.created_at).getFullYear();

      const atualMes = new Date(data).getMonth() + 1;
      const atualAno = new Date(data).getFullYear();

      if (avaliacaoMes === atualMes && avaliacaoAno === atualAno) {
        return avalicao;
      }
    });

    return {
      diasFeitos: avaliacoesFeitas.length,
      porcentagem: (avaliacoesFeitas.length * 100) / 30,
    };
  }
}
