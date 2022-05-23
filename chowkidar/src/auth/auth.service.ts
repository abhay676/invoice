import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userSerice: UsersService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userSerice.findOne(email);
    if (!user) return null;
    if (await this.userSerice.validatePwd(user.password, pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string, pass: string) {
    try {
      const result = await this.validateUser(email, pass);
      if (result)
        return {
          access_token: this.jwtService.sign(result, {
            secret: process.env.JWT_SECRET_KEY,
            expiresIn: '86400s',
          }),
        };
      else {
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
