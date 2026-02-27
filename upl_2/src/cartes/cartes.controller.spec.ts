import { Test, TestingModule } from '@nestjs/testing';
import { CartesController } from './cartes.controller';

describe('CartesController', () => {
  let controller: CartesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartesController],
    }).compile();

    controller = module.get<CartesController>(CartesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
