import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SteamApiService } from './steam-api.service';
import { SteamApiController } from './steam-api.controller';

@Module({
  imports: [HttpModule, ConfigModule ],
  providers: [SteamApiService],
  controllers: [SteamApiController]
})
export class SteamApiModule {}
