import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [AnimalModule.register()],
  controllers: [],
  providers: [],
})
export class AppModule {}
