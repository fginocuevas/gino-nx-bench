import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreLibModule } from '@core-lib';
import { UserModule } from '../user/user.module';

@Module({
  imports: [CoreLibModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
