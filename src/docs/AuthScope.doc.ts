/**
 * @api {POST} /login/patient Login do paciente
 * @apiName loginPatient
 * @apiGroup Autenticação
 *
 * @apiDescription Realiza login para o paciente
 *
 * @apiParam {String{..45}} email           E-mail cadastrado
 * @apiParam {String{..5}} password         Senha cadastrada
 *
 * @apiParamExample {json} Login
 *  {
 *    "email": "api@paciente.example.com",
 *    "password": "123456",
 *  }
 *
 * @apiSuccessExample {json} Login realizado
 *  HTTP/1.1 200 Success
 *  {
 *    "role": "Patient",
 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58",
 *    "user": {
 *      "id": "08b3d612-4196-46ce-96b0-b01b7ac6261d",
 *      "email": "api@paciente.example.com",
 *      "password": "$2a$10$2p/ErAPMyLAiURqLBKYCS.2OusqyPttQEvgPW9zRrjfmj3SFBa/NC",
 *      "created_at": "2021-07-22T03:19:31.837Z",
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
 *      "account_id": "0651da4a-180c-4212-96fa-7d7716e883db",
 *      "first_name": "ExampleName",
 *      "last_name": "ExampleLastName",
 *      "birthday": "03/09/2000"
 *    }
 * }
 *
 *
 */

/**
 * @api {POST} /login/professional Login do profissional
 * @apiName loginProfessional
 * @apiGroup Autenticação
 *
 * @apiDescription Realiza login para o profissional
 *
 * @apiParam {String{..45}} email           E-mail cadastrado
 * @apiParam {String{..5}} password         Senha cadastrada
 *
 * @apiParamExample {json} Login
 *  {
 *    "email": "api@profissional.example.com",
 *    "password": "123456",
 *  }
 *
 * @apiSuccessExample {json} Login realizado
 *  HTTP/1.1 200 Success
 *  {
 *    "role": "Professional",
 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58",
 *    "user": {
 *      "id": "08b3d612-4196-46ce-96b0-b01b7ac6261d",
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
 *      "first_name": "ExampleName",
 *      "last_name": "ExampleLastName",
 *      "birthday": "03/09/2000"
 *    }
 * }
 *
 *
 */
