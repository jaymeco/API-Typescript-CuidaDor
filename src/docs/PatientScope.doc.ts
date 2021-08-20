/**
 * @api {POST} /patients   Cadastrar um novo paciente
 * @apiName createPatient
 * @apiGroup Paciente
 *
 * @apiDescription Cadastra um novo paciente
 *
 * @apiParam {String{..45}} email             E-mail cadastrado
 * @apiParam {String{..5}} password           Senha cadastrada
 * @apiParam {String{..20}} first_name        Primeiro nome
 * @apiParam {String{8}} last_name            Sobrenome
 * @apiParam {String{..45}} birthday          Data de nasciemento
 *
 * @apiParamExample {json} Paciente
 *  {
 *    "email": "api@paciente.example.com",
 *    "password": "123456",
 *    "first_name": "ExampleName",
 *    "last_name": "ExampleLastName",
 *    "birthday": "DD/MM/YY",
 *  }
 *
 * @apiSuccessExample {json} Paciente cadastrado
 *  HTTP/1.1 201 Created
 *  {
 *    "account": {
 *      "id": "f12d019a-3a92-4fda-9b24-77000294d8dd",
 *      "email": "api@paciente.example.com",
 *      "password": "$2a$10$PIoLWVXc/F84ydACcOV8ceF8SfO/ZuJrHVvVJUMGhJDtPfIWSVr8W",
 *      "created_at": "2021-05-17T16:00:46.884Z",
 *    },
 *    "pacient": {
 *      "id": "08b3d612-4196-46ce-96b0-b01b7ac6261d",
 *      "gender": "Não informado",
 *      "height": "Não informado",
 *      "state": "Não informado",
 *      "weight": "Não informado",
 *      "occupation": "Não informado",
 *      "imc": 0,
 *      "condition": "Não informado",
 *      "blood_type": "Não informado",
 *      "cpf": "Não informado",
 *      "city": "Não informado",
 *      "first_name": "ExampleName",
 *      "last_name": "ExampleLastName",
 *      "birthday": "03/09/2000"
 *    }
 *  }
 *
 *
 */


/**
 * @apiIgnore Método passando por manutenção
 * @api {GET} /goals/:patient_id     Consultar todas as metas de um paciente
 * @apiName getGoals
 * @apiGroup Paciente
 *
 * @apiDescription Consulta todas as metas de atuais de um paciente
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiSuccessExample {json} Metas atuais:
 *    HTTP/1.1 200 OK
 *    [
 *     {
 *       "id": "1fd7a1de-6255-4b24-9c17-fc8d43ec3173",
 *       "content": "Alguma meta para o paciente",
 *       "checked": false,
 *       "patient_id": "b2434003-8d78-4857-ab93-fd7b8dacc240",
 *       "professional_id": "98f5f37c-35c4-423e-a5e8-8061fcfc7ccf",
 *       "frequency_per_week": 7,
 *       "runtime": 2,
 *       "created_at": "2021-05-17T16:00:46.884Z",
 *     }
 *    ]
 *
 *
*/

/**
 * @apiIgnore Método passando por manutenção
 * @api {PATCH} goals/ Marcar Meta como concluída
 * @apiName checkGoals
 * @apiGroup Paciente
 *
 * @apiDescription Marca as metas como concluidas
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam {String} id                  ID da meta
 * @apiParam {Boolean} checked            Atributo para indicar se a meta foi concluida
 * @apiParamExample {json} Meta:
 *    {
 *      "id": "1fd7a1de-6255-4b24-9c17-fc8d43ec3173",
 *      "checked": true,
 *    }
 *
 */

/**
 * @api {POST} /conect_professional_patient     Conectar um profissional ao paciente
 * @apiName conectProfessinalWithPatient
 * @apiGroup Paciente
 *
 * @apiDescription    Realiza a conexão de profissional a um paciente. Está rota é utilizada pelo paciente
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam {String} id            ID do paciente
 * @apiParam {String} email         E-mail do profissional
 * @apiParamExample {json} Meta:
 *    {
 *      "id": "755f5542-342a-4328-b838-7b2703ef6fc8",
 *      "email": "api@profissional.example.com",
 *    }
 * @apiSuccessExample {json} Profissional conectado:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "a0e5d1c4-dbe4-4ee1-a0b0-53526a5a5783",
 *      "email": "api@profissional.example.com",
 *      "password": "$2a$10$2p/ErAPMyLAiURqLBKYCS.2OusqyPttQEvgPW9zRrjfmj3SFBa/NC",
 *      "created_at": "2021-07-22T03:19:31.837Z",
 *      "gender": "Não informado",
 *      "specialization": "Não informado",
 *      "state": "Não informado",
 *      "about": "Não informado",
 *      "experience": "Não informado",
 *      "crm": "256987",
 *      "service_locations": "Não informado",
 *      "cpf": "Não informado",
 *      "city": "Não informado",
 *      "account_id": "0651da4a-180c-4212-96fa-7d7716e883db",
 *      "first_name": "Jayme",
 *      "last_name": "Anunciação",
 *      "birthday": "03/09/2000"
 *    }
 */

/**
 * @api {GET} patients/:patient_id/professionals      Consultar todos profissionals de um paciente
 * @apiName getProfessionalsByPatient
 * @apiGroup Paciente
 */
