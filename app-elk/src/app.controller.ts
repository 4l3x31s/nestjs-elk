import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import logger from './logger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    logger.info("welcome to home")
    return this.appService.getHello();
  }
  @Get('/post')
  getPost():string {
    logger.info("welcome to post")
    return 'Hola desde post'
  }
}
