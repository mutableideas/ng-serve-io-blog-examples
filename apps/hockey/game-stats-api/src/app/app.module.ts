import { Module } from '@nestjs/common';
import { HockeyGameStatsApiApplicationModule } from '@ngserveio/hockey/game-stats/api/application';

@Module({
  imports: [
    HockeyGameStatsApiApplicationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
