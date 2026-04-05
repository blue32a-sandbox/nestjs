import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Query,
  Redirect,
  Req,
  HttpRedirectResponse,
  Param,
  Body,
} from '@nestjs/common';
import type { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  /**
   * 依存注入
   * @see https://docs.nestjs.com/providers#dependency-injection
   */
  constructor(private catsService: CatsService) {}

  /**
   *ステータスコード、レスポンスヘッダー、リクエストペイロード
   * @see https://docs.nestjs.com/controllers#status-code
   * @see https://docs.nestjs.com/controllers#response-headers
   * @see https://docs.nestjs.com/controllers#request-payloads
   */
  @Post()
  @HttpCode(204) // 201 -> 204
  @Header('Cache-Control', 'no-store')
  create(@Body() createCatDto: CreateCatDto): void {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  /**
   * 非同期性、クエリパラメータ
   * @see https://docs.nestjs.com/controllers#asynchronicity
   * @see https://docs.nestjs.com/controllers#query-parameters
   */
  @Get()
  async findAllWithQuery(
    @Query('age') age: number,
    @Query('breed') breed: string,
  ): Promise<string> {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  /**
   * リクエストオブジェクトとルートのワイルドカード
   * @see https://docs.nestjs.com/controllers#request-object
   * @see https://docs.nestjs.com/controllers#route-wildcards
   */
  @Get('wildcards/*path')
  findWildcard(@Req() request: Request): string {
    return `This action returns a wildcard route: ${request.url}`;
  }

  @Get('docs/')
  @Redirect('https://docs.nestjs.com', 302)
  docs(@Query('version') version: string): HttpRedirectResponse | void {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/', statusCode: 302 };
    }
  }

  /**
   * ルートパラメータ
   * @see https://docs.nestjs.com/controllers#route-parameters
   */
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
