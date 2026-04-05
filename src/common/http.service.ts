import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  /**
   * プロパティベースの注入
   * @see https://docs.nestjs.com/providers#property-based-injection
   */
  @Inject('HTTP_OPTIONS')
  private readonly httpClient2: T;

  /**
   * `@Optional`デコーレータにより、構成オブジェクトが提供されない場合は
   * デフォルト値が使用される
   * @see https://docs.nestjs.com/providers#optional-providers
   */
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
}
