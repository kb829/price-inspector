import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class RedisCacheConfigService {
  constructor(private configService: ConfigService) {}
  
  get env(): string {
    return this.configService.get<string>('APP_ENV');
  }
  get name(): string {
    return this.configService.get<string>('APP_NAME');
  }
  get host(): string {
    return this.configService.get<string>('REDIS_HOST');
  }
  get port(): number {
   return Number(this.configService.get<number>('REDIS_PORT'));
  }
  get ttl(): number {
    return Number(this.configService.get<number>('CACHE_TTL'));
  }
}