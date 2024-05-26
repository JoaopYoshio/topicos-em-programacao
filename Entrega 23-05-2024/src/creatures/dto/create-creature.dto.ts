import { IsArray, IsString } from 'class-validator';

export class CreateCreatureDto {

    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    location: string;

    @IsString()
    drops: [string];
}
