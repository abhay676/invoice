import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  BadRequestException,
  Version,
} from '@nestjs/common';
import axios from 'axios';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CompanyService } from 'src/company/company.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private readonly companyService: CompanyService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/create')
  @Version('1')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const { address, state, country, pincode, ...payload } = createUserDto;
      // Make user in chowkidar
      const { data } = await axios.post(
        `${process.env.CHOWKIDAR_BASE_URL}/${process.env.CHOWKIDAR_REGISTER_NEW_USER}`,
        payload,
      );
      createUserDto.clientId = data.clientId;
      const company = await this.companyService.findById(createUserDto.companyId);
      createUserDto.company = company
      return this.usersService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
