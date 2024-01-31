import { Module } from '@nestjs/common';
import { GameStatsService } from './game-stats/game-stats.service';

@Module({
  providers: [GameStatsService],
  exports: [GameStatsService],
})
export class HockeyGameStatsApiServicesModule {}
