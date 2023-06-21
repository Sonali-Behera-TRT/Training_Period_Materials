import { Injectable, OnModuleInit } from "@nestjs/common";
import { Socket, io } from 'socket.io-client'

@Injectable()
export class SocketClient implements OnModuleInit{
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:3001');
  }

  onModuleInit() {
      console.log('Connected to client-side at port 3002');
      this.registerClientsToEvents();
  }

  private registerClientsToEvents() {
    this.socketClient.emit('message', 'Hey I joined message');
    this.socketClient.on('message', data => console.log(data));
  }
}