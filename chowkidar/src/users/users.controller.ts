import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create-user';
import { LoginUserDto } from './dto/login-user';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('auth/register')
  async register(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }

  @Post('auth/login')
  async login(@Body() payload: LoginUserDto) {
    return this.authService.login(payload.email, payload.password);
  }

  @UseGuards(AuthGuard())
  @Get('user')
  async getUser(@Req() req) {
    return {
      user: req.user,
    };
  }
}
