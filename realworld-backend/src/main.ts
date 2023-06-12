import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // Set up Swagger https://docs.nestjs.com/openapi/introduction#setup-options
  const config = new DocumentBuilder()
    .setTitle('RealWorld API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // Allow CORS
  app.enableCors();

  // Start application
  await app.listen(3000);
  const url = 'http://localhost:3000/swagger';
  console.log('Application is running on: ' + url);

  // Export swagger as json
  // https://github.com/nestjs/swagger/issues/158#issuecomment-531560231
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
}
bootstrap();
