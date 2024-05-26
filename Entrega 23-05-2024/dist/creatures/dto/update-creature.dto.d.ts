import { CreateCreatureDto } from './create-creature.dto';
declare const UpdateCreatureDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCreatureDto>>;
export declare class UpdateCreatureDto extends UpdateCreatureDto_base {
    name: string;
    description: string;
    location: string;
    drops: [string];
}
export {};
