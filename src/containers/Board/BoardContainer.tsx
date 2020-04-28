import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Position } from '../../interfaces';
import { State } from '../../modules/reducer';
import { actions as gameActions } from '../../modules/game';
import { actions as ownerActions } from '../../modules/owner';
import Board from '../../components/Board';

const BoardContainer = () => {
  const { game, owners } = useSelector((state: State) => state);

  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = event.currentTarget;
    const position = target.getAttribute('data-position') as Position;

    if (game.winner === null && owners[position] === null) {
      dispatch(ownerActions.setOwner(position, game.player));
      dispatch(gameActions.switchPlayer());
    }
  }

  return <Board owners={owners} onClick={handleClick} />;
}

export default BoardContainer;
