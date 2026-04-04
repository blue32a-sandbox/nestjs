import { Controller, Get, HostParam } from '@nestjs/common';

/**
 * hostオプションを使ったサブドメインルーティング
 * @see https://docs.nestjs.com/controllers#sub-domain-routing
 */
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return `This action returns information for account: ${account}`;
  }
}
