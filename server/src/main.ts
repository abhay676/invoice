import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(3000);
  console.log(`Server is running on ${await app.getUrl()}`);
}
bootstrap();
