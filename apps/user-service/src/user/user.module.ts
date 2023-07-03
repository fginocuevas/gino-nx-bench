import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaLibModule } from '@prisma-lib';
import { PrismaLibService } from 'libs/prisma-lib/src/lib/prisma-lib.service';

@Module({
  imports:[PrismaLibModule],
  controllers: [UserController],
  providers: [UserService, PrismaLibService],
})
export class UserModule {}
