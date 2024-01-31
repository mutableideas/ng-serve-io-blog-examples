import { Module } from '@nestjs/common';
import { HockeyGameStatsApiApplicationModule } from '@org/hockey/game-stats/api/application';

@Module({
  imports: [
    HockeyGameStatsApiApplicationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
