/**
 * @api {POST} /goals      Cadastrar uma nova meta
 * @apiName CreateGoal
 * @apiGroup Metas
 *
 * @apiDescription Cadastra uma nova meta para o paciente
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam (Body) {String} content                                     A tarefa a ser feita pelo paciente
 * @apiParam (Body) {String} patient_id                                  ID do paciente
 * @apiParam (Body) {String} professional_id                             ID do profissional
 * @apiParam (Body) {Integer} frequency_per_week                         Frequência de execuçaõ daquela meta
 * @apiParam (Body) {String} dataInicio                                  Data de inicio da meta no formato ISO
 * @apiParam (Body) {String} dataFinal                                   Data de conclusão da meta no formato ISO
 *
 * @apiParamExample {json} Meta a ser criada:
 *  {
 *    "content": "Correr 200km",
 *    "patient_id": "6cfb6b9f-cf66-4c4e-854f-c7ffe95ec763",
 *    "professional_id": "be7562e9-7aca-4648-957d-1c718e7a80c8",
 *    "frequency_per_week": 7,
 *    "dataInicio": "2021-11-27T00:25:43.408Z",
 *    "dataFinal": "2021-12-12T00:25:43.408Z"
 *  }
 *
 * @apiSuccessExample {json} Meta criada:
 *    HTTP/1.1 201 OK
 *  {
 *    "id": "08f20157-e942-41ca-93ff-10f0551700a"
 *    "checked": false
 *    "content": "Correr 200km",
 *    "patient_id": "6cfb6b9f-cf66-4c4e-854f-c7ffe95ec763",
 *    "professional_id": "be7562e9-7aca-4648-957d-1c718e7a80c8",
 *    "frequency_per_week": 7,
 *    "dataInicio": "2021-11-27T00:25:43.408Z",
 *    "dataFinal": "2021-12-12T00:25:43.408Z"
 *  }
 */

/**
 * @api {GET} /goals/:patient_id         Listar metas do paciente
 * @apiName GetGoals
 * @apiGroup Metas
 *
 * @apiDescription Cadastra uma nova meta para o paciente
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam (Param) {String} patient_id                                  ID do paciente
 *
 * @apiSuccessExample {json} Metas do paciente:
 *    HTTP/1.1 200 OK
 *  {
 *    "emAndamento": [
 *      {
 *        "id": "08f20157-e942-41ca-93ff-10f0551700a"
 *        "checked": false
 *        "content": "Correr 200km",
 *        "patient_id": "6cfb6b9f-cf66-4c4e-854f-c7ffe95ec763",
 *        "professional_id": "be7562e9-7aca-4648-957d-1c718e7a80c8",
 *        "frequency_per_week": 7,
 *        "dataInicio": "2021-11-27T00:25:43.408Z",
 *        "dataFinal": "2021-12-12T00:25:43.408Z"
 *      },
 *     ],
 *     "concluidos": [
 *      {
 *        "id": "08f20157-e942-41ca-93ff-10f0551700a"
 *        "checked": true
 *        "content": "Correr 200km",
 *        "patient_id": "6cfb6b9f-cf66-4c4e-854f-c7ffe95ec763",
 *        "professional_id": "be7562e9-7aca-4648-957d-1c718e7a80c8",
 *        "frequency_per_week": 7,
 *        "dataInicio": "2021-11-27T00:25:43.408Z",
 *        "dataFinal": "2021-12-12T00:25:43.408Z"
 *      },
 *     ],
 *     "naoConcluidos": [
 *      {
 *        "id": "08f20157-e942-41ca-93ff-10f0551700a"
 *        "checked": true
 *        "content": "Correr 200km",
 *        "patient_id": "6cfb6b9f-cf66-4c4e-854f-c7ffe95ec763",
 *        "professional_id": "be7562e9-7aca-4648-957d-1c718e7a80c8",
 *        "frequency_per_week": 7,
 *        "dataInicio": "2021-11-27T00:25:43.408Z",
 *        "dataFinal": "2021-12-12T00:25:43.408Z"
 *      },
 *     ],
 *  }
 */

/**
 * @api {PATCH} /goals                              Marcar meta como feita
 * @apiName CheckGoals
 * @apiGroup Metas
 * @apiDeprecated                                  Método precisa ser revisto
 *
 * @apiDescription Marca uma meta como feita
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam (Body) {String} id                                   ID da meta
 * @apiParam (Body) {Boolean} checked                             Flag que indica se a meta foi feita ou não
 *
 * @apiParamExample {json} Meta a ser marcada:
 *  {
 *    "id": "6cfb6b9f-cf66-4c4e-854f-c7ffe95ec763",
 *    "checked": true,
 *  }
 *
 * @apiSuccessExample {json} Reponse:
 *    HTTP/1.1 200 OK
 */
