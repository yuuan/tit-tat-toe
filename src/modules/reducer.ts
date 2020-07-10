import { combineReducers } from 'redux';
import { reducer as game } from './game';
import { GameState } from './game/interfaces';
import { reducer as owners } from './owner';
import { OwnersState } from './owner/interfaces';

export interface State {
  game: GameState;
  owners: OwnersState;
};

const reducer = combineReducers({
  game,
  owners,
});

export default reducer;
