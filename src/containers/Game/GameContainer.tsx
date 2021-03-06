import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Position } from '../../interfaces';
import { State } from '../../modules/reducer';
import { actions as gameActions } from '../../modules/game';
import { actions as ownerActions, interfaces as ownerInterfaces } from '../../modules/owner';
import Game from '../../components/Game';

const lines = [
  [Position.TopLeft, Position.TopCenter, Position.TopRight],
  [Position.CenterLeft, Position.Center, Position.CenterRight],
  [Position.BottomLeft, Position.BottomCenter, Position.BottomRight],
  [Position.TopLeft, Position.CenterLeft, Position.BottomLeft],
  [Position.TopCenter, Position.Center, Position.BottomCenter],
  [Position.TopRight, Position.CenterRight, Position.BottomRight],
  [Position.TopLeft, Position.Center, Position.BottomRight],
  [Position.BottomLeft, Position.Center, Position.TopRight],
];

const judge = (owners: ownerInterfaces.OwnersState) => (
  lines.map(positions => (
    positions.map(
      position => owners[position]
    ).reduce(
      (owner, target) => owner === target ? owner : null
    )
  )).find(player => player !== null) ?? null
);

const GameContainer = () => {
  const { game, owners } = useSelector((state: State) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const winner = judge(owners);

    if (winner !== null) {
      dispatch(gameActions.setWinner(winner));
    }
  }, [owners, dispatch]);

  const handleClickBox = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = event.currentTarget;
    const position = target.getAttribute('data-position') as Position;

    if (game.winner === null && owners[position] === null) {
      dispatch(ownerActions.setOwner(position, game.player));
      dispatch(gameActions.switchPlayer());
    }
  };

  const handleClickResetButton = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(ownerActions.resetOwners());
    dispatch(gameActions.resetGame());
  };

  return (
    <Game
      winner={game.winner}
      owners={owners}
      handleClickBox={handleClickBox}
      handleClickResetButton={handleClickResetButton}
    />
  );
}

export default GameContainer;
