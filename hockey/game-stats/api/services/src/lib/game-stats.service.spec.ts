import { Test, TestingModule } from '@nestjs/testing';
import { GameStatsService } from './game-stats.service';

describe('GameStatsService', () => {
  let service: GameStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameStatsService],
    }).compile();

    service = module.get<GameStatsService>(GameStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
