import { Test, TestingModule } from '@nestjs/testing';
import { GameStatsController } from './game-stats.controller';

describe('GameStatsController', () => {
  let controller: GameStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameStatsController],
    }).compile();

    controller = module.get<GameStatsController>(GameStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
