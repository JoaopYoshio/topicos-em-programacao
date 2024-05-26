import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { Model } from 'mongoose';
import { Creatures } from './schemas/creature.schemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CreaturesService implements OnModuleInit {
  constructor(
    @InjectModel(Creatures.name) private creatureModel: Model<Creatures>,
  ) { }

  async onModuleInit() {
    const url = "https://eldenring.fanapis.com/api/creatures";
    const data = await fetch(url);
    const json = await data.json();

    const creaturesData = json.data.map((data) => {
      const creature = {
        id: data.id,
        name: data.name,
        description: data.description,
        location: data.location,
        drops: data.drops
      };

      return creature;
    });

    this.creatureModel.insertMany(creaturesData);
  }

  async create(createCreatureDto: CreateCreatureDto) {
    const createdCreature = await this.creatureModel.insertMany(createCreatureDto);

    return createdCreature;
  }

  async findAll() {
    const creatures = await this.creatureModel.find();

    return creatures;
  }

  async findOne(id: string) {
    const creature = await this.creatureModel.findOne({ id: id });

    return creature;
  }

  async update(id: number, updateCreatureDto: UpdateCreatureDto) {
    const updatedCharacters = await this.creatureModel.findOneAndUpdate(
      { id: id },
      updateCreatureDto,
      { new: true }
    );
    return updatedCharacters;
  }

  async remove(id: number) {
    await this.creatureModel.findOneAndDelete({ id: id });
  }
}
