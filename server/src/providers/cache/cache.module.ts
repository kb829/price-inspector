import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheConfigModule } from 'src/config/cache/config.module';
import { RedisCacheConfigService } from 'src/config/cache/config.service';
import * as redisStore from 'cache-manager-redis-store';

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
})
export class RedisCacheModule {}