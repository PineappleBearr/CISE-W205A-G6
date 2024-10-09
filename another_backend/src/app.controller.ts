import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('submit-form')
  async submitForm(@Body() article: any): Promise<any> {
    return this.appService.savearticle(article)
  }
}
