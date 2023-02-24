import { Controller, Get, HttpStatus, HttpException } from '@nestjs/common';
import { async } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/error')
  async error() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}