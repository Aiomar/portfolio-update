import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // this enable the class-validator npm package by using validation pipe  
  app.useGlobalPipes(new ValidationPipe()); 
  await app.listen(process.env.PORT ?? 3001);
  console.log("=>LINK : http://localhost:"+process.env.PORT);
}
bootstrap();
