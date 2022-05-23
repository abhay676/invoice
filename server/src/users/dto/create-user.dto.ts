import { IsNotEmpty, IsString, IsEmail, IsNumber, IsEnum } from 'class-validator';
import { Company } from 'src/company/entities/company.entity';

export enum Status {
  ACTIVE='active',
  INACTIVE='inactive'
}

export class CreateUserDto {
  clientId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsNumber()
  pincode: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Status)
  status: string;

  @IsNotEmpty()
  @IsNumber()
  companyId: number;

  company: Company;
}
