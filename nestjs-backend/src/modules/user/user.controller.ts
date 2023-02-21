import { UpdateUserDto } from './dto/update-user.dto';
import {
  Controller,
  Get,
  Patch,
  UseGuards,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { User } from './../../models/entities/user.entity';
import { MyJwtGuard } from './../auth/guard/myjwt.guard';
import { PrismaService } from './../prisma/prisma.service';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { uuid } from 'uuidv4';
import path, { extname } from 'path';

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
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  updateUser(
    @GetUser() user: User,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      updateUserDto.avatar = file.filename.toString();
    }
    return this.userService.updateUser(user, updateUserDto);
  }
}
