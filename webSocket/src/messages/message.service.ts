import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './schemas/message.schemas';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) { }

  async create(Message: Object) {
    const createdMessage = await this.messageModel.create(Message);

    return createdMessage;
  }

  async findAll() {
    const message = await this.messageModel.find();

    return message;
  }
}
