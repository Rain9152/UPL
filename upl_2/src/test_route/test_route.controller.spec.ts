import { Test, TestingModule } from '@nestjs/testing';
import { TestRouteController } from './test_route.controller';

describe('TestRouteController', () => {
  let controller: TestRouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestRouteController],
    }).compile();

    controller = module.get<TestRouteController>(TestRouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
