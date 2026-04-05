import { Module } from '@nestjs/common';
import { CommonModule } from './common.module';

/**
 * モジュールの再エクスポート
 * @see https://docs.nestjs.com/modules#module-re-exporting
 */
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
