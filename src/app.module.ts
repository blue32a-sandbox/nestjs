import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { User } from './users/entities/user.entity';

@Module({
  /**
   * モジュールのインポート
   * @see https://docs.nestjs.com/modules#feature-modules
   */
  imports: [
    CatsModule,

    /**
     * 動的モジュールのインポートと設定
     * @see https://docs.nestjs.com/modules#dynamic-modules
     */
    DatabaseModule.forRoot([User]),
  ],

  exports: [
    /**
     * 動的モジュールの再エクスポート（メソッド呼び出し省略）
     * @see https://docs.nestjs.com/modules#dynamic-modules
     */
    DatabaseModule,
  ],

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
