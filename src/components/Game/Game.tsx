import React from 'react';
import styled from 'styled-components';
import { Player } from '../../interfaces';
import { interfaces } from '../../modules/game';
import Board from '../../containers/Board';
import ResetButton from '../../containers/ResetButton';

const colors = (winner: interfaces.Winner) => {
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
  winner: interfaces.Winner;
};

const Game: React.FC<Props> = ({ winner }) => (
  <Background winner={winner}>
    <Container>
      <Board />
      <ResetButton wide={true} />
    </Container>
  </Background>
);

interface BackgroundProps {
  winner: interfaces.Winner;
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
