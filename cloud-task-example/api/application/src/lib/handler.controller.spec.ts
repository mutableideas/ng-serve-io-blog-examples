import { Test, TestingModule } from '@nestjs/testing';
import { HandlerController } from './handler.controller';

describe('HandlerController', () => {
  let controller: HandlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandlerController],
    }).compile();

    controller = module.get<HandlerController>(HandlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
