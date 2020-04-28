import { Reducer } from 'redux';
import { Player } from '../../interfaces';
import { GameActionTypes, GameActions } from './actions';
import { GameState } from './interfaces';

const initialState: GameState = {
  player: Player.Black,
  winner: null,
};

const reducer: Reducer<GameState, GameActions> = (state = initialState, action) => {
  switch (action.type) {
    case GameActionTypes.SWITCH_PLAYER:
      return {
        ...state,
        player: state.player === Player.Black ? Player.White : Player.Black,
      }

    case GameActionTypes.SET_WINNER:
      return {
        ...state,
        winner: action.payload.winner,
      }

    case GameActionTypes.RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
