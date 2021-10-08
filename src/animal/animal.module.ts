import * as dotenv from 'dotenv';
import { ClassProvider, DynamicModule, Module, Type } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { AnimalStrategy } from './strategy/animal.strategy';
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
      exports: [AnimalClassProvider],
    };
  }

  private static getClassProvider(): ClassProvider<AnimalService> {
    const animalStrategy = process.env.ANIMAL_STRATEGY as AnimalStrategy;
    // eslint-disable-next-line prettier/prettier
    const AnimalServiceClass = AnimalModule.getClassFromStrategy(animalStrategy);
    return {
      provide: AnimalService,
      useClass: AnimalServiceClass,
    };
  }

  private static getClassFromStrategy(
    strategy: AnimalStrategy,
  ): Type<AnimalService> {
    switch (strategy) {
      case AnimalStrategy.CAT:
        return CatService;
      case AnimalStrategy.DOG:
        return DogService;
      default:
        return AnimalService;
    }
  }
}
