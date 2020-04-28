import { Action } from 'redux';
import { Player } from '../../interfaces';

export enum GameActionTypes {
  SWITCH_PLAYER = 'GAME/SWITCH_PLAYER',
  SET_WINNER = 'GAME/SET_WINNER',
  RESET_GAME = 'GAME/RESET_GAME',
};


interface SwitchGameAction extends Action {
  type: GameActionTypes.SWITCH_PLAYER;
}

export const switchPlayer = (): SwitchGameAction => ({
  type: GameActionTypes.SWITCH_PLAYER,
});


interface SetWinnerAction extends Action {
  type: GameActionTypes.SET_WINNER;
  payload: {
    winner: Player;
  };
}

export const setWinner = (winner: Player): SetWinnerAction => ({
  type: GameActionTypes.SET_WINNER,
  payload: { winner },
});


interface ResetGameAction extends Action {
  type: GameActionTypes.RESET_GAME;
}

export const resetGame = (): ResetGameAction => ({
  type: GameActionTypes.RESET_GAME,
});


export type GameActions = SwitchGameAction | SetWinnerAction | ResetGameAction;
