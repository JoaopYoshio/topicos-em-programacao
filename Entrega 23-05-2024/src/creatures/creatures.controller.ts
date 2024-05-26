import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('creatures')
export class CreaturesController {
  constructor(private readonly creaturesService: CreaturesService) {}
  
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCreatureDto: CreateCreatureDto) {
    return this.creaturesService.create(createCreatureDto);
  }
  
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.creaturesService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creaturesService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreatureDto: UpdateCreatureDto) {
    return this.creaturesService.update(+id, updateCreatureDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creaturesService.remove(+id);
  }
}
