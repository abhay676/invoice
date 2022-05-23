import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      secretOrPrivateKey: `${process.env.JWT_SECRET_KEY}`,
      signOptions: { expiresIn: '86400s' }, // 24-hrs
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
