import { Injectable } from '@nestjs/common';
import { GameStatType } from '@ngserveio/hockey/game-stats/common';
import { Observable, Subject, filter } from 'rxjs';

@Injectable()
export class GameStatsService {
  protected stat$ = new Subject<GameStatType>();
  
  public gameStats(gameId: string): Observable<GameStatType> {
    return this.stat$.pipe(
      filter(p => p.gameId === gameId)
    );
  }

  public getForGame(gameId: string): Observable<GameStatType[]> {
    //return this.
  }

  public add(gameStat: GameStatType): void {
    this.stat$.next(gameStat);
  }
}
