import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

/**
 * 関数型ミドルウェア
 * @see https://docs.nestjs.com/middleware#functional-middleware
 */
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request...');
  next();
}
