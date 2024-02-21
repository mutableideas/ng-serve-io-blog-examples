import { Injectable, inject } from '@angular/core';
import { GAME_STATS_URL } from './injection-tokens';
import { GameStatType } from '@ngserveio/hockey/game-stats/common';
import { Observable } from 'rxjs';
import { connectSse } from '@ngserveio/shared/realtime-communication/server-sent-events/ui';

@Injectable({
  providedIn: 'root'
})
export class GameStatsService {
  protected gameStatsUrl = inject(GAME_STATS_URL);


  public getStats(gameId: string): Observable<GameStatType> {
    return connectSse(`${this.gameStatsUrl}/game-stats/${gameId}`);
  }
}
