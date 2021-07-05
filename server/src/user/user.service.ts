import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { CacheService } from '../providers/cache/cache.service';

@Injectable()
export class UserService {
    constructor(
        private readonly cacheService: CacheService,
    ) {}

    private readonly logger = new Logger();

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
