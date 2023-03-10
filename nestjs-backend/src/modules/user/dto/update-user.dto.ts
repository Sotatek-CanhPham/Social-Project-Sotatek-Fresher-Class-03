import { IsEmail, IsNotEmpty, IsString, IsEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  fullname?: string;

  location?: string;

  bio?: string;
}
