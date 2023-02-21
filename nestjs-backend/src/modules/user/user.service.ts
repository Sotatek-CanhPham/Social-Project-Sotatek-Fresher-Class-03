import { PrismaService } from './../prisma/prisma.service';
import { User } from 'src/models/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  getUser(user: User) {
    return user;
  }

  getUserById(userId: string) {
    return `This action returns a #${userId} user`;
  }

  async updateUser(user: User, updateUserDto: UpdateUserDto) {
    const updateUser = this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        fullname: updateUserDto.fullname,
        location: updateUserDto.location,
        bio: updateUserDto.bio,
        avatar: updateUserDto.avatar,
      },
      select: {
        id: true,
        fullname: true,
        location: true,
        bio: true,
        avatar: true,
      },
    });

    return updateUser;
  }
}
