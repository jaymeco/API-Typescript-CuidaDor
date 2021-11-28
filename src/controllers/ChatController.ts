import { Server, Socket } from "socket.io";
import { CreateMessage } from "../domain/UseCases/CreateMessage";
import { v4 as uuid } from 'uuid';
import { GetMessagesByRoomUseCase } from "../domain/UseCases/GetMessagesByRoom";

interface ChatUsers {
  id: string;
  name: string;
  socket_id: string;
  chat_room: string;
}

interface ChatMessages {
  userId: string;
  message: string;
  userName: string;
  chat_room: string;
  created_at: string;
  id: string;
}

class ChatController {
  private io: Server;
  private messages: ChatMessages[];
  private users: ChatUsers[] = [];
  private createMessageUseCase;
  private getMessagesByRoomUseCase;

  constructor(io: Server, messages: any[]) {
    this.io = io;
    this.messages = messages;
    this.createMessageUseCase = new CreateMessage();
    this.getMessagesByRoomUseCase = new GetMessagesByRoomUseCase();
  }

  private async getMessagesByRoom(room: string) {
    // const messagesRoom = this.messages.filter(message => message.chat_room === room);
    return await this.getMessagesByRoomUseCase.execute(room);
  }

  public seletecRoom(socket: Socket) {
    socket.on('select_room', async (data, callback) => {
      socket.join(data.chat_room);

      const userInRoom = this.users.find((user) => user.id === data.id && user.chat_room === data.chat_room);

      if (userInRoom) {
        userInRoom.socket_id == socket.id;
      } else {
        this.users.push({
          id: data.id,
          name: data.name,
          chat_room: data.chat_room,
          socket_id: socket.id,
        });
      }
      const messagesRoom = await this.getMessagesByRoom(data.chat_room);
      callback(messagesRoom);

    });
  }

  public async sendMessage(socket: Socket) {
    socket.on('message', async data => {
      const message = {
        chat_room: data.chat_room,
        userName: data.userName,
        userId: data.userId,
        socket_id: socket.id,
        message: data.message,
        created_at: new Date().toISOString(),
        id: uuid(),
      }
      console.log(message);
      // this.messages.push(message);
      await this.createMessageUseCase.execute(
        message.id,
        message.chat_room,
        message.message,
        message.socket_id,
        message.created_at,
        message.userName,
        message.userId,
      );
      this.io.to(data.chat_room).emit('message', message);
    });
  }
}

export default ChatController;
