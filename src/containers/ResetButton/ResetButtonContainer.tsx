import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as gameActions } from '../../modules/game';
import { actions as ownersActions } from '../../modules/owner';
import Button from '../../components/Button';

interface Props {
  wide?: boolean;
};

const ResetButtonContainer: React.FC<Props> = ({ wide = false }) => {
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(ownersActions.resetOwners());
    dispatch(gameActions.resetGame());
  }

  return (
    <Button wide={wide} onClick={handleClick}>
      リセット
    </Button>
  );
}

export default ResetButtonContainer;
