import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async convertTo3wa(@Body() coordinates:{
    lat: number,
    lng: number
  }) {
    return this.appService.convertTo3wa(coordinates);
  }
}
