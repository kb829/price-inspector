import { Module } from '@nestjs/common';
import { SteamApiService } from './steam-api.service';

@Module({
  providers: [SteamApiService]
})
export class SteamApiModule {}
