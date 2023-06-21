import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3000/']
  }
})
export class MyGateway implements OnModuleInit{
  @WebSocketServer()
  server: Server;
  
  // performs some functionalities like adding event listeners when the module gets initialized

  onModuleInit() {

    // handles 'connection' event which is triggered everytime a new client is connected to the backend

      this.server.on('connection', socket => {
        console.log('Connected to server-side at port 3001');
        console.log(socket.id);
      })
  }

  // handles 'new-message' event which is called when the event is triggered and emits back to all the clients as a response.

  @SubscribeMessage('new-message')
  handleMessage(@MessageBody() message: any) {
    this.server.emit('new-message', message);
  }

  // handles 'new-user-joined' event which is called when the event is triggered and emits back to all the clients as a response.

  @SubscribeMessage('new-user-joined')
  handleNewUser(@MessageBody() message: any){
    this.server.emit('new-user-joined', message);
  }
}
