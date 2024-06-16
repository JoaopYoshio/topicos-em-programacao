import { Module } from '@nestjs/common';
import { Message, MessageSchema } from './schemas/message.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageService } from './message.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  controllers: [],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
