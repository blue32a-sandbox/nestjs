import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],

  /**
   * コントローラーを起動して実行に移す
   * @see https://docs.nestjs.com/controllers#getting-up-and-running
   */
  controllers: [
    AppController,
    CatsController,
    AdminController,
    AccountController,
  ],

  /**
   * プロバイダー登録
   * @see https://docs.nestjs.com/providers#provider-registration
   */
  providers: [AppService, CatsService],
})
export class AppModule {}
