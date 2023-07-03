import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { PrismaLibModule } from '@prisma-lib';

@Module({
  imports:[
    ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		  }),
    PrismaLibModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreLibModule {}
