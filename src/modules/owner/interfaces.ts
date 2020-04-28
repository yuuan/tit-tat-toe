import { Position, Player } from '../../interfaces';

export type Owner = Player | null;

export interface OwnersState {
  [Position.TopLeft]: Owner;
  [Position.TopCenter]: Owner;
  [Position.TopRight]: Owner;
  [Position.CenterLeft]: Owner;
  [Position.Center]: Owner;
  [Position.CenterRight]: Owner;
  [Position.BottomLeft]: Owner;
  [Position.BottomCenter]: Owner;
  [Position.BottomRight]: Owner;
};
