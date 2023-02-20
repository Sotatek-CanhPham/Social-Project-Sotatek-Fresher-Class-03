import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRepository } from './../../models/repositories/user.repository';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  // imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
