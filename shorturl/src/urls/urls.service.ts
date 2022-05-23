import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './entities/url.entity';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url) private readonly urlRepo: Repository<Url>,
  ) {}
  create(createUrlDto: CreateUrlDto) {
    const isAlreadyExists = this.findOne(createUrlDto.longUrl);
    if (!isAlreadyExists) {
      createUrlDto.shortUrl = nanoid(7);
      const url = this.urlRepo.create(createUrlDto);
      return this.urlRepo.save(url);
    }
    return isAlreadyExists;
  }

  findOne(longUrl: string) {
    return this.urlRepo.findOne({ longUrl });
  }

  findByShortUrl(shortUrl: string) {
    return this.urlRepo.findOne({ shortUrl });
  }
}
