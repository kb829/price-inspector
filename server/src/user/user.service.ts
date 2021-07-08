import { CACHE_MANAGER, Inject, Injectable, Logger, HttpService } from '@nestjs/common';
import { CacheService } from '../providers/cache/cache.service';
import { SteamApiService } from 'src/providers/core/steam-api.service';
import { User } from './dto/user';

@Injectable()
export class UserService {
    constructor(
        private readonly cacheService: CacheService,
        private httpService: HttpService,
        private steamApiService: SteamApiService,
    ) {}

    private readonly logger = new Logger();

    async getProfile(id: string): Promise<User> {
        let profileInfo = this.steamApiService.getPlayer(id);
        return profileInfo;
    }

    async get(key): Promise<any> {
        return await this.cacheService.get(key);
    }

    async set(key, value) {
        await this.cacheService.set(key, value);
    }

    async reset() {
        await this.cacheService.reset();
    }

    async del(key) {
        await this.cacheService.del(key);
    }
}
