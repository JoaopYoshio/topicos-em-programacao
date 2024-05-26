/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { OnModuleInit } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { Model } from 'mongoose';
import { Creatures } from './schemas/creature.schemas';
export declare class CreaturesService implements OnModuleInit {
    private creatureModel;
    constructor(creatureModel: Model<Creatures>);
    onModuleInit(): Promise<void>;
    create(createCreatureDto: CreateCreatureDto): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, Creatures> & Creatures & {
        _id: import("mongoose").Types.ObjectId;
    }, Omit<CreateCreatureDto, "_id">>[]>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Creatures> & Creatures & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Creatures> & Creatures & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: number, updateCreatureDto: UpdateCreatureDto): Promise<import("mongoose").Document<unknown, {}, Creatures> & Creatures & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: number): Promise<void>;
}
