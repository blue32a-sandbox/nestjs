import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

/**
 * 機能モジュール、共有モジュール、グローバルモジュール
 * @see https://docs.nestjs.com/modules#feature-modules
 * @see https://docs.nestjs.com/modules#shared-modules
 * @see https://docs.nestjs.com/modules#global-modules
 */
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  /**
   * モジュールクラスはプロバイダーを注入するができる
   * @see https://docs.nestjs.com/modules#dependency-injection
   */
  constructor(private catsService: CatsService) {}
}
