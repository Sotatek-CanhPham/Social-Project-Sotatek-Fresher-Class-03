import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  async signUp(authDto: AuthDto) {
    const hashedPassword = await argon.hash(authDto.password);
    return {
      message: `Hashed password: ${hashedPassword}`,
    };
  }

  signIn() {
    return 'This is the sign-in route';
  }
}
