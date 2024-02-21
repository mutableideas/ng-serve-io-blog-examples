import { Test, TestingModule } from '@nestjs/testing';
import { GameStatRepository } from './game-stat.repository';

describe('GameStatRepositoryService', () => {
  let service: GameStatRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameStatRepository],
    }).compile();

    service = module.get<GameStatRepository>(GameStatRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
