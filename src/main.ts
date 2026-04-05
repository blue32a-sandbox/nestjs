import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * グローバルミドルウェアの設定
   * @see https://docs.nestjs.com/middleware#global-middleware
   */
  // app.use(logger);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
