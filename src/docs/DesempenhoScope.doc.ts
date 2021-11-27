
/**
 * @api {POST} /daily_assessment                 Cadastrar uma avaliação diária
 * @apiName CreateDaliyAssessment
 * @apiGroup Desempenho
 * @apiDeprecated                              Método precisa ser revisto
 *
 * @apiDescription Registra uma avaliação diária
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam (Body) {String} patient_id                               ID do paciente
 * @apiParam (Body) {Boolean} question_01                             Resposta referente a primeira pergunta
 * @apiParam (Body) {String} question_02                              Resposta referente a segunda pergunta. O valor armazenado será o JSON stringfy do array de números
 * @apiParam (Body) {Integer} question_03                             Resposta referente a terceira pergunta
 * @apiParam (Body) {Integer} question_04                             Resposta referente a quarta pergunta
 * @apiParam (Body) {Integer} question_05                             Resposta referente a quinta pergunta
 * @apiParam (Body) {Integer} question_06                             Resposta referente a sexta pergunta
 * @apiParam (Body) {Integer} question_07                             Resposta referente a sétima pergunta
 * @apiParam (Body) {Integer} question_08                             Resposta referente a oitava pergunta
 * @apiParam (Body) {Integer} question_09                             Resposta referente a nona pergunta
 * @apiParam (Body) {Integer} question_10                             Resposta referente a décima pergunta
 * @apiParam (Body) {Integer} question_11                             Resposta referente a décima primeira pergunta
 *
 * @apiParamExample {json} Avaliação diária a ser preenchida:
 *  {
 *    "patient_id": "08b3d612-4196-46ce-96b0-b01b7ac6261d",
 *	  "question_01": true,
 *	  "question_02": "[35,45,30]",
 *	  "question_03": 7,
 *	  "question_04": 7,
 *	  "question_05": 8,
 *	  "question_06": 4,
 *	  "question_07": 2,
 *	  "question_08": 1,
 *	  "question_09": 6,
 *	  "question_10": 10,
 *	  "question_11": 9,
 *  }
 *
 * @apiSuccessExample {json} Reponse:
 *    HTTP/1.1 201 OK
 */
