import { Module } from '@nestjs/common';
import configuration from './configuration';
import { SteamAPIConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigService, SteamAPIConfigService],
  exports: [ConfigService, SteamAPIConfigService],
})
export class SteamAPIConfigModule {}