import { Module } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreaturesController } from './creatures.controller';
import { Creatures, CreaturesSchema } from './schemas/creature.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Creatures.name, schema: CreaturesSchema },
    ]),
  ],
  controllers: [CreaturesController],
  providers: [CreaturesService],
})
export class CreaturesModule {}
