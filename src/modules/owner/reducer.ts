import { Reducer } from 'redux';
import { Position } from '../../interfaces';
import { OwnerActionTypes, OwnerActions } from './actions';
import { OwnersState } from './interfaces';

const initialState: OwnersState = {
  [Position.TopLeft]: null,
  [Position.TopCenter]: null,
  [Position.TopRight]: null,
  [Position.CenterLeft]: null,
  [Position.Center]: null,
  [Position.CenterRight]: null,
  [Position.BottomLeft]: null,
  [Position.BottomCenter]: null,
  [Position.BottomRight]: null,
};

const reducer: Reducer<OwnersState, OwnerActions> = (state = initialState, action) => {
  switch (action.type) {
    case OwnerActionTypes.SET_OWNER:
      return {
        ...state,
        [action.payload.position]: action.payload.owner,
      }

    case OwnerActionTypes.RESET_OWNERS:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
