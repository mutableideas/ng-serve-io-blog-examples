import { Controller, Inject, Param, Sse } from '@nestjs/common';
import { GameStatsService } from '../../../services/src/lib/game-stats/game-stats.service';
import { Observable, map } from 'rxjs';
import { GameStatType } from '@org/hockey/game-stats/common';

@Controller('game-stats')
export class GameStatsController {
  @Inject()
  protected gameStatsService!: GameStatsService;
  
  @Sse(':gameId')
  public gameStats(@Param('gameId') gameId: string): Observable<MessageEvent<GameStatType>> {
    return this.gameStatsService.gameStats(gameId).pipe(
      map(data => ({
        data
      } as MessageEvent<GameStatType>))
    )
  }
}
