import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
