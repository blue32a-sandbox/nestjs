import { Module, DynamicModule } from '@nestjs/common';
import { createDatabaseProviders } from './database.providers';
import { Connection } from './connection.provider';

@Module({
  providers: [Connection],
  exports: [Connection],
})
export class DatabaseModule {
  /**
   * 動的モジュール
   * @see https://docs.nestjs.com/modules#dynamic-modules
   */
  static forRoot(entities: any[] = [], options?: any): DynamicModule {
    const providers = createDatabaseProviders(options, entities);
    return {
      global: false,
      module: DatabaseModule,
      providers: providers,
      exports: providers,
    };
  }
}
