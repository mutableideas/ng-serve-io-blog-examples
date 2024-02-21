import { Module } from '@nestjs/common';
import { GameRepository } from './game.repository';
import { GameStatRepository } from './game-stat.repository';

@Module({
  controllers: [],
  providers: [
    GameRepository,
    GameStatRepository
  ],
  exports: [
    GameRepository,
    GameStatRepository
  ],
})
export class HockeyGameStatsDataAccessModule {}
