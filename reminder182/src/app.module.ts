import { TelegramModule } from './TelegramModule/telegram.module';
import { DatabaseModule } from './DatabaseModule/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import teleramConfig from './config/telegram.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [teleramConfig],
    }),
    TelegramModule,
    DatabaseModule,]
})
export class AppModule { }
