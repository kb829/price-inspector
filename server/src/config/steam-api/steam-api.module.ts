import { Module } from '@nestjs/common';
import { SteamApiService } from './steam-api.service';
import { SteamApiController } from './steam-api.controller';

@Module({
  providers: [SteamApiService],
  controllers: [SteamApiController]
})
export class SteamApiModule {}
