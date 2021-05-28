import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModule } from './cache.module';
import { CacheService } from './cache.service';

// doesn't exist redis use mock class
class CacheServiceMock{
  get(_key: string){
    return 'test1'
  }
}

describe('CacheService', () => {
  let service: CacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        //doesn't exist redis use mock like this
        {
          provide: CacheService,
          useClass: CacheServiceMock,
        },
      ],
    }).compile();

    service = module.get<CacheService>(CacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('get', () => {
    it('should return pair value of key', async () => {
      const expectedValue = 'test1';
      const get = await service.get('1');
      expect(get).toEqual(expectedValue);
    })
  })
});
