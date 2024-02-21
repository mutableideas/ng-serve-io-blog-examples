import { Module } from '@nestjs/common';
import { GameStatsController } from './game-stats.controller';
import { HockeyGameStatsApiServicesModule } from '@ngserveio/hockey/game-stats/api/services';

@Module({
  imports: [
    HockeyGameStatsApiServicesModule
  ],
  controllers: [GameStatsController],
})
export class HockeyGameStatsApiApplicationModule {}
