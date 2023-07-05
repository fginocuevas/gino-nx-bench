import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import what3words, {
  ApiVersion,
  Transport,
  What3wordsService,
  axiosTransport,
  ConvertTo3waOptions
} from '@what3words/api';

@Injectable()
export class AppService {

  private w3wService: What3wordsService;

  constructor(private configService:ConfigService){

    const apiKey = this.configService.get("WHAT3WORDS_KEY");

    const config: {
      host: string;
      apiVersion: ApiVersion;
    } = {
      host: 'https://api.what3words.com',
      apiVersion: ApiVersion.Version3,
    };

    const transport: Transport = axiosTransport();
    this.w3wService = what3words(apiKey, config, { transport });

  }

  async convertTo3wa(coordinates:{
    lat: number,
    lng: number
  }){
    const options: ConvertTo3waOptions = {
      coordinates: coordinates,
    };
    return this.w3wService.convertTo3wa(options);
  }

}
