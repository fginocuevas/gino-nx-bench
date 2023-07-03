import { Module } from '@nestjs/common';
import { PrismaLibService } from './prisma-lib.service';

@Module({
  controllers: [],
  providers: [PrismaLibService],
  exports: [PrismaLibService],
})
export class PrismaLibModule {}
