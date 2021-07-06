import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class SteamAPIConfigService {
  constructor(private configService: ConfigService) {}
  
  get env(): string {
    return this.configService.get<string>('STEAM_API_KEY');
  }
}