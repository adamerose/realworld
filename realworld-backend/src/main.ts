import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up Swagger https://docs.nestjs.com/openapi/introduction#setup-options
  const config = new DocumentBuilder()
    .setTitle('RealWorld API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // Start application
  await app.listen(3000);
  const url = 'http://localhost:3000/swagger';
  console.log('Application is running on: ' + url);
}
bootstrap();
