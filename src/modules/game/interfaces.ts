import { Player } from '../../interfaces';

export type Winner = Player | null;

export interface GameState {
  player: Player;
  winner: Winner;
};
