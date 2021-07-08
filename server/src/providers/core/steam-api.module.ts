import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SteamApiService } from './steam-api.service';
import { SteamAPIConfigModule } from 'src/config/steam-api/config.module';

@Module({
    imports: [HttpModule, ConfigModule, SteamAPIConfigModule],
    providers: [SteamApiService],
    exports: [SteamApiService]
})
export class SteamApiModule {}
