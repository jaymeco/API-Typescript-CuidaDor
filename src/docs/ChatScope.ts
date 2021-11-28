
/**
 * @api {GET} /professionals/:professional_id/chats         Listar chats do profissional
 * @apiName GetChats
 * @apiGroup Chat
 *
 * @apiDescription Lista todos os chats do profissional
 * @apiHeader (Authorization) {String} authorization    Token de autenticação fornecidado ao realizar login
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2NTFkYTRhLTE4MGMtNDIxMi05NmZhLTdkNzcxNmU4ODNkYiIsImlhdCI6MTYyNjkxMzE5NCwiZXhwIjoxNjI2OTk5NTk0fQ.MoqG_AIB4xt487F2SH_ZefGTZtblPSrUKn63QdI-Y58"
 *    }
 *
 * @apiParam (Param) {String} professional_id                     ID do profissional
 *
 * @apiSuccessExample {json} Chats do profissional:
 *    HTTP/1.1 200 OK
 *   [
 *      {
 *        "id": "08f20157-e942-41ca-93ff-10f0551700a"
 *        "chatName": "Nome do paciente"
 *        "chatAvatar": "https://cuidador.com.br/image.png",
 *      },
 *   ],
 */
