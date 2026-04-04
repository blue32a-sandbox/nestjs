import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';

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

  providers: [AppService],
})
export class AppModule {}
