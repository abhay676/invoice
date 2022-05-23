import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/entities/company.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly companyRepo: Repository<Company>,
    private readonly userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const company = await this.companyRepo.findOne({
      id: createUserDto.companyId,
    });
    createUserDto.company = company;
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }
}
