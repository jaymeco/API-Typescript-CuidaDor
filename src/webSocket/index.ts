import { Socket } from 'socket.io';
import { io } from '../app';
import ChatController from '../controllers/ChatController';

const users: any[] = [];
const messages: any[] = [];
const chatController = new ChatController(io, messages);


io.on('connection', (socket: Socket) => {

  console.log('Se conectou: ', socket.id);

  // Conexão com a sala
  chatController.seletecRoom(socket);

  // Envio das messagens para sala
  chatController.sendMessage(socket);


  socket.on('disconnect', () => {
    console.log('[SOCKET] Disconnect => A connection was disconnected')
  })
});
