import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../providers/cache/cache.module';
import { SteamApiModule } from 'src/providers/core/steam-api.module';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';

@Module({
  imports: [RedisCacheModule, SteamApiModule],
  providers: [WishlistService],
  controllers: [WishlistController]
})
export class WishlistModule {}
