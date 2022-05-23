import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(payload: CreateUserDto): Promise<User> {
    const pwd = await this.encryptPwd(payload.password);
    const userDetail = { ...payload };
    userDetail.password = pwd;
    const user = this.userRepo.create(userDetail);
    return this.userRepo.save(user);
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepo.findOne({ email });
  }

  async findByClientId(clientId: string): Promise<User | undefined> {
    return this.userRepo.findOne({ clientId });
  }

  async encryptPwd(pwd: string) {
    return bcrypt.hash(pwd, 10);
  }

  async validatePwd(oldPwd: string, newPwd: string): Promise<boolean> {
    return bcrypt.compare(newPwd, oldPwd);
  }
}
