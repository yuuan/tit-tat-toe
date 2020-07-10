import React from 'react';
import styled from 'styled-components';
import { Player } from '../../interfaces';
import { interfaces as gameInterfaces } from '../../modules/game';
import { interfaces as ownerInterfaces } from '../../modules/owner';
import Board from '../Board';
import Button from '../Button';

const colors = (winner: gameInterfaces.Winner) => {
  switch (winner) {
    case Player.Black:
      return '#CA3C6E';
    case Player.White:
      return '#1F91BE';
    default:
      return '#323233';
  }
};

interface Props {
  winner: gameInterfaces.Winner;
  owners: ownerInterfaces.OwnersState;
  handleClickBox: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleClickResetButton: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Game: React.FC<Props> = ({ winner, owners, handleClickBox, handleClickResetButton }) => (
  <Background winner={winner}>
    <Container>
      <Board owners={owners} onClick={handleClickBox} />
      <Button wide={true} onClick={handleClickResetButton}>
        リセット
      </Button>
    </Container>
  </Background>
);

interface BackgroundProps {
  winner: gameInterfaces.Winner;
};

const Background = styled.div<BackgroundProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ winner }) => colors(winner)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
`;

export default Game;
