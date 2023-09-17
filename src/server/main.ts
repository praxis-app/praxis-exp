import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

export interface EnvironmentVariables {
  CORS_ALLOWED_ORIGIN: string;
  SERVER_PORT: number;
  NODE_ENV: string;
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get<ConfigService<EnvironmentVariables>>(ConfigService);

  app.setGlobalPrefix('api');
  app.enable('trust proxy');
  app.enableCors({
    credentials: true,
    origin: configService.get<string>('CORS_ALLOWED_ORIGIN', '').split(','),
  });

  await app.listen(configService.get<string>('SERVER_PORT', ''));
}

bootstrap();
