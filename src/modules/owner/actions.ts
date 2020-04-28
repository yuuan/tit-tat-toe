import { Action } from 'redux';
import { Position, Player } from '../../interfaces';

export enum OwnerActionTypes {
  SET_OWNER = 'OWNER/SET_OWNER',
  RESET_OWNERS = 'OWNER/RESET_OWNERS',
};


interface SetOwnerAction extends Action {
  type: OwnerActionTypes.SET_OWNER;
  payload: {
    position: Position;
    owner: Player;
  };
}

export const setOwner = (position: Position, owner: Player): SetOwnerAction => ({
  type: OwnerActionTypes.SET_OWNER,
  payload: { position, owner },
});


interface ResetOwnersAction extends Action {
  type: OwnerActionTypes.RESET_OWNERS;
}

export const resetOwners = (): ResetOwnersAction => ({
  type: OwnerActionTypes.RESET_OWNERS,
});


export type OwnerActions = SetOwnerAction | ResetOwnersAction;
