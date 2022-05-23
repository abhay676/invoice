import { Controller, Get, Post, Body, Param, Redirect } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller()
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post('short/link')
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.create(createUrlDto);
  }

  @Get(':id')
  @Redirect('http://google.com', 302) // FIXME : replace with project website
  async redirectToLongUrl(@Param('id') id: string) {
    const { longUrl } = await this.urlsService.findByShortUrl(id);
    return { url: longUrl };
  }
}
