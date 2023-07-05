import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('convert-to-3wa')
  async convertTo3wa(@Body() coordinates:{
    lat: number,
    lng: number
  }) {
    return this.appService.convertTo3wa(coordinates);
  }

  @Post('convert-to-coordinates')
  async convertToCoordinates(@Body() dto: {words: string}) {
    return this.appService.convertToCoordinates(dto);
  }
}
