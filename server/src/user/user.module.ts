import { Module, HttpModule } from '@nestjs/common';
import { RedisCacheModule } from '../providers/cache/cache.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SteamApiModule } from 'src/providers/core/steam-api.module';

@Module({
  imports: [RedisCacheModule, HttpModule, SteamApiModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
