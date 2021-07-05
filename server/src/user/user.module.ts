import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../providers/cache/cache.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [RedisCacheModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
