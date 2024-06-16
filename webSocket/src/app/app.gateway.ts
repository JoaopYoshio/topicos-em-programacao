import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from 'src/messages/message.service';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['X-API-TOKEN'],
  },
})
// OnGatewayConnection
export class AppGateway
  implements OnGatewayInit, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  constructor(private readonly messageService: MessageService) { }
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, message: {message: string, user: string}): void {
    const data = {
      "message": message.message,
      "username": message.user,
      "clientId": client.id
    }

    this.messageService.create(data);
    this.server.emit('msgToClient', message.message, client.id, message.user);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  async handleConnection(client: Socket) {
    const messageHistory = await this.messageService.findAll();
    this.logger.log(`Client connected: ${client.id}`);
    client.emit('connectionClient', messageHistory);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
