import { Module } from '@nestjs/common';
import configuration from './configuration';
import { RedisCacheConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigService, RedisCacheConfigService],
  exports: [ConfigService, RedisCacheConfigService],
})
export class RedisCacheConfigModule {}