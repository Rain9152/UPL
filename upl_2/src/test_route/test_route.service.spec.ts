import { Test, TestingModule } from '@nestjs/testing';
import { TestRouteService } from './test_route.service';

describe('TestRouteService', () => {
  let service: TestRouteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestRouteService],
    }).compile();

    service = module.get<TestRouteService>(TestRouteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
