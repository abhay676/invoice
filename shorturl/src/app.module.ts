import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UrlsModule],
})
export class AppModule {}
