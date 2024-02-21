import { Module } from '@nestjs/common';
import { GameStatsService } from './game-stats.service';
import { HockeyGameStatsDataAccessModule } from '@ngserveio/hockey/game-stats/api/data-access';
import { GameService } from './game.service';

@Module({
  imports: [HockeyGameStatsDataAccessModule],
  providers: [GameStatsService, GameService],
  exports: [GameStatsService, GameService],
})
export class HockeyGameStatsApiServicesModule {}
