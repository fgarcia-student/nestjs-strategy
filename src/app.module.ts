import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AnimalModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
