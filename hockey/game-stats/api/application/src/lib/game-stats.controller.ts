import { Body, Controller, Get, Inject, Param, Post, Sse } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { GameStatType } from '@ngserveio/hockey/game-stats/common';
import { GameStatsService } from '@ngserveio/hockey/game-stats/api/services';

@Controller('game-stats')
export class GameStatsController {
  @Inject()
  protected gameStatsService!: GameStatsService;
  
  @Sse(':gameId/real-time')
  public gameStats(@Param('gameId') gameId: string): Observable<MessageEvent<GameStatType>> {
    return this.gameStatsService.gameStats(gameId).pipe(
      map(data => ({
        data
      } as MessageEvent<GameStatType>))
    )
  }

  @Get(':gameId')
  public getGameStats(@Param('gameId') gameId: string): Observable<GameStatType[]> {
    return this.gameStatsService.gameStats()
  }

  @Post()
  public addStat(@Body() gameStat: GameStatType): Observable<GameStatType> {
    
  }
}
