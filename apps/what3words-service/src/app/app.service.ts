import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import what3words, {
  ApiVersion,
  Transport,
  What3wordsService,
  axiosTransport,
  ConvertTo3waOptions,
  ConvertToCoordinatesOptions
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
    return await this.w3wService.convertTo3wa(options)
      .catch(err => {
        console.error(err);
        throw new BadRequestException(err);
      });
  }

  async convertToCoordinates(dto: { words: string }){

    const { words } = dto;

    const options: ConvertToCoordinatesOptions = {
      words: words,
      format: 'json',
    };
    return await this.w3wService.convertToCoordinates(options)
      .catch(err => {
        console.error(err);
        throw new BadRequestException(err);
      });
  }

}
