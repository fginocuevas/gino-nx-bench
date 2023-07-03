import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaLibService } from '@prisma-lib';

@Injectable()
export class UserService {

  constructor(private dbService: PrismaLibService){}

  async create(createUserDto: CreateUserDto) {
    return await this.dbService.user.create({
      data: createUserDto
    });
  }

  async findAll() {
    return await this.dbService.user.findMany();
  }

  async findOne(id: number) {
    return await this.dbService.user.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.dbService.user.update({
      data: updateUserDto,
      where: {
        id: id,
      }
    });
  }

  async remove(id: number) {
    return await this.dbService.user.delete({
      where: {
        id: id,
      }
    })
  }
}
