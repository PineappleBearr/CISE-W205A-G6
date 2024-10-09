import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8082;
  // await app.listen(port, () => console.log(`Server running on port ${port}`));

  //enable cors
  app.enableCors();
  await app.listen(port);
}
bootstrap();
