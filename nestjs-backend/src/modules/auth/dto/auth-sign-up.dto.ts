import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  location?: string;

  bio?: string;
}
