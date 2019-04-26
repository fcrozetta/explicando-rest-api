import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValuesController } from './values/values.controller';

@Module({
  imports: [],
  controllers: [AppController, ValuesController],
  providers: [AppService],
})
export class AppModule {}
