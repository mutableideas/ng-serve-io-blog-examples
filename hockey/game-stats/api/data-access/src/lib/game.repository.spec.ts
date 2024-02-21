import { Test, TestingModule } from '@nestjs/testing';
import { GameRepository } from './game.repository';

describe('GameRepositoryService', () => {
  let service: GameRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameRepository],
    }).compile();

    service = module.get<GameRepository>(GameRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
