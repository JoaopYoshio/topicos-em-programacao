import { Module } from '@nestjs/common';
import { AppGateway } from './app/app.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './messages/message.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/webSocket-chat'), MessageModule],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
