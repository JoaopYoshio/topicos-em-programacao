import { PartialType } from '@nestjs/mapped-types';
import { CreateCreatureDto } from './create-creature.dto';
import { IsString } from 'class-validator';

export class UpdateCreatureDto extends PartialType(CreateCreatureDto) {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    location: string;

    @IsString()
    drops: [string];
}
