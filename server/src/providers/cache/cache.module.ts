import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheConfigModule } from '../../config/cache/config.module';
import { RedisCacheConfigService } from '../../config/cache/config.service';
import * as redisStore from 'cache-manager-redis-store';
import { CacheService } from './cache.service';

@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [RedisCacheConfigModule],
            inject: [RedisCacheConfigService],
            useFactory: async (redisCacheConfigService: RedisCacheConfigService) => ({
                store: redisStore,
                host: redisCacheConfigService.host,
                port: redisCacheConfigService.port,
                ttl: redisCacheConfigService.ttl,
            })
        })
    ],
    providers: [CacheService],
    exports: [CacheService]
})
export class RedisCacheModule {}