import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../providers/cache/cache.module';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';

@Module({
  imports: [RedisCacheModule],
  providers: [WishlistService],
  controllers: [WishlistController]
})
export class WishlistModule {}
