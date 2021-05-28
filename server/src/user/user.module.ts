import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../config/cache/cache.module';
import { UserService } from './user.service';

@Module({
  imports: [RedisCacheModule],
  providers: [UserService]
})
export class UserModule {}
