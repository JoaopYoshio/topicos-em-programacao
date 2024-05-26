import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CreaturesDocument = HydratedDocument<Creatures>;

@Schema({ timestamps: true })
export class Creatures {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    drops: [string];
}

export const CreaturesSchema = SchemaFactory.createForClass(Creatures);

