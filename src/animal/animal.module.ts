import * as dotenv from 'dotenv';
import { ClassProvider, DynamicModule, Module, Type } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { AnimalEnum } from './strategy/animal.enum';
import { CatService } from './strategy/cat.service.strategy';
import { DogService } from './strategy/dog.service.strategy';

dotenv.config();

@Module({})
export class AnimalModule {
  public static register(): DynamicModule {
    const AnimalClassProvider = AnimalModule.getClassProvider();
    return {
      module: AnimalModule,
      controllers: [AnimalController],
      providers: [AnimalClassProvider],
      exports: [AnimalService],
    };
  }

  private static getClassProvider(): ClassProvider<AnimalService> {
    const animalStrategy = process.env.ANIMAL_STRATEGY as AnimalEnum;
    // eslint-disable-next-line prettier/prettier
    const AnimalServiceClass = AnimalModule.getClassFromStrategy(animalStrategy);
    return {
      provide: AnimalService,
      useClass: AnimalServiceClass,
    };
  }

  private static getClassFromStrategy(
    strategy: AnimalEnum,
  ): Type<AnimalService> {
    switch (strategy) {
      case AnimalEnum.CAT:
        return CatService;
      case AnimalEnum.DOG:
        return DogService;
      default:
        return AnimalService;
    }
  }
}
