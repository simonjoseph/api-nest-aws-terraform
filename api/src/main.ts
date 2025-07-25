import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const { PORT= 3000 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true, whitelist: true}));

  const config = new DocumentBuilder()
    .setTitle('API Rest Nestjs with  AWS and Terraform')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

    const swaggerCDN = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.27.0';
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory, {
      customCssUrl: [`${swaggerCDN}/swagger-ui.css`],
      customJs: [
        `${swaggerCDN}/swagger-ui-bundle.js`, 
        `${swaggerCDN}/swagger-ui-standalone-preset.js`
      ],
    });

  await app.listen(PORT);
  console.log(`💻 Application is running on: http://localhost:${PORT}`);
  console.log(`📄 Swagger is running on: http://localhost:${PORT}/api`);
}
bootstrap();
