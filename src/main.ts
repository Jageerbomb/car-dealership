import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Remueve todo lo que no esta incluido en el DTO
      forbidNonWhitelisted: true //Retorna bad request si hay propiedades en el objeto no requeridas
    })
  );

  await app.listen(3000);
}
bootstrap();
