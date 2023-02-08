import { ConfigService } from '@nestjs/config';
import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthSignUpDto, AuthSignInDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signUp(authSignUpDto: AuthSignUpDto) {
    const hashedPassword = await argon.hash(authSignUpDto.password);
    try {
      const user = await this.prismaService.user.create({
        data: {
          fullname: authSignUpDto.fullname,
          email: authSignUpDto.email,
          password: hashedPassword,
          location: '',
          bio: '',
        },

        select: {
          id: true,
          fullname: true,
          email: true,
          location: true,
          bio: true,
        },
      });
      return await this.signJwtToken(user.id, user.email);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Email already exists');
      }
    }
  }

  async signIn(authSignInDto: AuthSignInDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: authSignInDto.email,
      },
    });
    if (user) {
      const isValid = await argon.verify(user.password, authSignInDto.password);
      if (isValid) {
        delete user.password;
        return await this.signJwtToken(user.id, user.email);
      }
    }

    throw new ForbiddenException('Email or password is incorrect');
  }

  async signJwtToken(
    userId: string,
    email: string,
  ): Promise<{ accessToken: string }> {
    const payload = { sub: userId, email };

    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '120m',
      secret: this.configService.get('JWT_SECRET'),
    });

    return {
      accessToken: jwtString,
    };
  }
}
