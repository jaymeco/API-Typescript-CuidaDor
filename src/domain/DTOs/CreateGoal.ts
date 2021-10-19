export interface ICreateGoalRequestDTO {
  content: string;
  patient_id: string;
  professional_id: string;
  frequency_per_week: number;
  dataInicio: string;
  dataFinal: string;
}
