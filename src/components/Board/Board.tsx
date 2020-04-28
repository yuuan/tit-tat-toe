import React from 'react';
import styled from 'styled-components';
import Position from '../../interfaces/Position';
import { interfaces } from '../../modules/owner';
import Box from '../Box';

const positions: Position[] = [
  Position.TopLeft,
  Position.TopCenter,
  Position.TopRight,
  Position.CenterLeft,
  Position.Center,
  Position.CenterRight,
  Position.BottomLeft,
  Position.BottomCenter,
  Position.BottomRight,
];

interface Props {
  owners: interfaces.OwnersState;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Board = ({ owners, onClick }: Props) => (
  <Container>
    {positions.map(position => (
      <Box key={position} position={position} owner={owners[position]} onClick={onClick} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  background-color: #1d2021;
`;

export default Board;
