/**
 * @api {POST} /professionals                  Cadastrar um novo profissional
 * @apiName createProfessional
 * @apiGroup Profissional
 *
 * @apiDescription Cadastra um novo profissional
 *
 * @apiParam (Body) {String{..45}} email                E-mail cadastrado
 * @apiParam (Body) {String{..30}} password             Senha cadastrada
 * @apiParam (Body) {String{..30}} first_name           Primeiro nome
 * @apiParam (Body) {String{..30}} last_name            Sobrenome
 * @apiParam (Body) {String{..45}} birthday             Data de nasciemento
 * @apiParam (Body) {String{..45}} crm                  Código do conselho
 * @apiParam (Body) {String{..45}} cpf                  CPF do profissional
 *
 * @apiParamExample {json} Profissional a ser cadastrado
 *  {
 *    "email": "api@profissional.example.com",
 *    "password": "123456",
 *    "first_name": "ExampleName",
 *    "last_name": "ExampleLastName",
 *    "birthday": "DD/MM/YY",
 *    "crm": "258587",
 *    "cpf": "00000000000",
 *  }
 *
 * @apiSuccessExample {json} Profissional cadastrado
 *  HTTP/1.1 201 Created
 *  {
 *    "account": {
 *      "id": "f12d019a-3a92-4fda-9b24-77000294d8dd",
 *      "email": "api@cuidador.example.com",
 *      "password": "$2a$10$PIoLWVXc/F84ydACcOV8ceF8SfO/ZuJrHVvVJUMGhJDtPfIWSVr8W",
 *      "created_at": "2021-05-17T16:00:46.884Z",
 *    },
 *    "professional": {
 *      "id": "08b3d612-4196-46ce-96b0-b01b7ac6261d",
 *      "account_id": "08b3d612-4196-46ce-96b0-b01b7ac6261d",
 *      "gender": "Não informado",
 *      "specialization": "Não informado",
 *      "state": "Não informado",
 *      "about": "Não informado",
 *      "service_locations": "Não informado",
 *      "telefone": "Não informado",
 *      "avatar": "",
 *      "crm": "258587",
 *      "profissao": "Não informado",
 *      "cpf": "00000000000",
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
 * @api {GET} /professionals/:professional_id/professionals      Consultar todos pacientes de um profissional
 * @apiName GetPatientsByProfessional
 * @apiGroup Profissional
 *
 * @apiDescription Consulta todos os pacientes conectados com o profissional
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam (Param) {String} professional_id                    ID do profissional
 * @apiParam (Query) {String} [nome]                             Nome ou sobrenome a ser buscado
 * @apiParam (Query) {String{..1}} [orderBy]                          Letra inicial que será buscada pelo nome
 *
 * @apiParamExample {JSON} Query-params:
 * {
 *    "nome": "jorge",
 *    "orderBy": "j",
 * }
 *
 * @apiSuccessExample {json} Pacientes:
 *    HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "a0e5d1c4-dbe4-4ee1-a0b0-53526a5a5783",
 *      "pacient": {
 *        "id": "08b3d612-4196-46ce-96b0-b01b7ac6261d",
 *        "gender": "Não informado",
 *        "height": "Não informado",
 *        "state": "Não informado",
 *        "weight": "Não informado",
 *        "occupation": "Não informado",
 *        "imc": 0,
 *        "condition": "Não informado",
 *        "blood_type": "Não informado",
 *        "cpf": "Não informado",
 *        "city": "Não informado",
 *        "first_name": "ExampleName",
 *        "last_name": "ExampleLastName",
 *        "birthday": "03/09/2000",
 *      },
 *    },
 *  ]
 */


/**
 * @api {POST} /conect_professional_patient     Conectar um paciente ao profissional
 * @apiName conectProfessinalWithPatient
 * @apiGroup Profissional
 *
 * @apiDescription    Realiza a conexão de paciente a um profissional. Está rota é utilizada pelo profissional
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam {String} id            ID do profissional
 * @apiParam {String} email         E-mail do paciente
 * @apiParamExample {json} Meta:
 *    {
 *      "id": "755f5542-342a-4328-b838-7b2703ef6fc8",
 *      "email": "api@paciente.example.com",
 *    }
 * @apiSuccessExample {json} Paciente conectado:
 *    HTTP/1.1 200 OK
 *    {
  *     "id": "08b3d612-4196-46ce-96b0-b01b7ac6261d",
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
 *      "birthday": "03/09/2000",
 *    }
 */
