import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaService } from './prisma.service';
declare const module: any;

const SWAGGER_ROUTE = 'swagger';
const BACKEND_PORT = process.env.BACKEND_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger (https://docs.nestjs.com/recipes/swagger)
  const config = new DocumentBuilder().setTitle('RealWorld Example').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_ROUTE, app, document);

  // Hot reload (https://docs.nestjs.com/recipes/hot-reload)
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  // https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(BACKEND_PORT);
  console.log(`Running on http://localhost:${BACKEND_PORT}/${SWAGGER_ROUTE}`);
}
bootstrap();
