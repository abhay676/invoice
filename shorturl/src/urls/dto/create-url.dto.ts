import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;

  @IsNotEmpty()
  @IsBoolean()
  isExpirable: boolean;

  @IsNotEmpty()
  @IsString()
  requestedBy: string;

  shortUrl: string;
}
