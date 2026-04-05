import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

/**
 * コントローラーから使用されるシンプルなサービス
 * `@Injectable`デコレータはIoCコンテナで管理可能なクラスであることを示す
 * @see https://docs.nestjs.com/providers#services
 */
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
