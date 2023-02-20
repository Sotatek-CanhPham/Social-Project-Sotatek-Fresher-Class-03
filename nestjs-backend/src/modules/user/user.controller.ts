import { UpdateUserDto } from './dto/update-user.dto';
import { Controller, Get, Patch, UseGuards, Body } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { User } from './../../models/entities/user.entity';
import { MyJwtGuard } from './../auth/guard/myjwt.guard';
import { PrismaService } from './../prisma/prisma.service';
import { UserService } from './user.service';

@UseGuards(MyJwtGuard)
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return this.userService.getUser(user);
  }

  @Get(':id')
  getUserById(@GetUser('id') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Patch('/edit')
  updateUser(@GetUser() user: User, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(user, updateUserDto);
  }
}
