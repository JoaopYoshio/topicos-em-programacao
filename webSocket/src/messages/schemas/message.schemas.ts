import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
    @Prop({ required: true })
    message: string;
    
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    clientId: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

