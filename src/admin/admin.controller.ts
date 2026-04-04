import { Controller, Get } from '@nestjs/common';

/**
 * サブドメインルーティング
 * @see https://docs.nestjs.com/controllers#sub-domain-routing
 */
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
