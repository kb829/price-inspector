import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { CacheService } from '../providers/cache/cache.service';
import { SteamApiService } from 'src/providers/core/steam-api.service';
import { Wishlist } from './dto/wishlist';

@Injectable()
export class WishlistService {
    constructor(
        private readonly cacheService: CacheService,
        private readonly steamApiService: SteamApiService,
    ) {}

    private readonly logger = new Logger();

    async getWishlist(id: string): Promise<Wishlist> {
        let wishlist = await this.steamApiService.getWishlist(id);
        return wishlist;
    }
}
