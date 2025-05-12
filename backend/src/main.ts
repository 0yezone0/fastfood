import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bật CORS với config đầy đủ
  app.enableCors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
