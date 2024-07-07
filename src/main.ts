import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as swStats from 'swagger-stats';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); 
  

  const options = new DocumentBuilder()
    .setTitle('Users REST API')
    .setDescription('API REST de Bookstore')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options); 
  SwaggerModule.setup('docs', app, document); 

  await app.listen(3000);
}
bootstrap();
