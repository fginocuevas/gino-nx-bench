import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreLibModule } from '@core-lib';

@Module({
  imports: [CoreLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
