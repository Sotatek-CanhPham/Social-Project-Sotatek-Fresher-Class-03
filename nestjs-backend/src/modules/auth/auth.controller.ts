import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpDto, AuthSignInDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() authSignUpDto: AuthSignUpDto) {
    return this.authService.signUp(authSignUpDto);
  }

  @Post('sign-in')
  signIn(@Body() authSignInDto: AuthSignInDto) {
    return this.authService.signIn(authSignInDto);
  }
}
