import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello(
      true,
      {service : "purchase-api",
        version: "1.0.0"
      },
      "Hello NestJS"
    );
  }
}
