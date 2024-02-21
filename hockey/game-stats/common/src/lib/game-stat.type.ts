export type Game = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: number;
}

export type Goal = {
  id: string;
  type: 'powerPlay' | 'shortHanded' | 'penaltyShot' | 'evenStrength'
  playerId: string;
  assist: string[],
}

export type Penalty = {
  id: string;
  playerId: string;
  type: 'minor' | 'major' | 'match' | 'gameMisconduct' | 'penaltyShot',
  name: string;
}

export type StatType = Goal | Penalty;

export type GameStat<T extends StatType> = {
  id: string;
  gameId: string;
  period: number | string;
  time: number;
  stat: T,
};

export type GameStatType = GameStat<StatType>;
