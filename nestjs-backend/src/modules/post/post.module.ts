import { JwtStrategy } from './../auth/strategy/jwt.strategy';
import { PrismaModule } from './../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [PostController],
  providers: [PostService, JwtStrategy],
})
export class PostModule {}
