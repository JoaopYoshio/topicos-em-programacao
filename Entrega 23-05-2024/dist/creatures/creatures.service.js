"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreaturesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const creature_schemas_1 = require("./schemas/creature.schemas");
const mongoose_2 = require("@nestjs/mongoose");
let CreaturesService = class CreaturesService {
    constructor(creatureModel) {
        this.creatureModel = creatureModel;
    }
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
    async create(createCreatureDto) {
        const createdCreature = await this.creatureModel.insertMany(createCreatureDto);
        return createdCreature;
    }
    async findAll() {
        const creatures = await this.creatureModel.find();
        return creatures;
    }
    async findOne(id) {
        const creature = await this.creatureModel.findOne({ id: id });
        return creature;
    }
    async update(id, updateCreatureDto) {
        const updatedCharacters = await this.creatureModel.findOneAndUpdate({ id: id }, updateCreatureDto, { new: true });
        return updatedCharacters;
    }
    async remove(id) {
        await this.creatureModel.findOneAndDelete({ id: id });
    }
};
exports.CreaturesService = CreaturesService;
exports.CreaturesService = CreaturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(creature_schemas_1.Creatures.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CreaturesService);
//# sourceMappingURL=creatures.service.js.map