import React from 'react';
import styled from 'styled-components';
import Player from '../../interfaces/Player';

const colors = {
  [Player.Black]: '#CA3C6E',
  [Player.White]: '#1F91BE',
};

interface Props {
  owner: Player;
};

const Circle: React.FC<Props> = ({ owner }) => (
  <Container owner={owner} />
);

interface ContainerProps {
  owner: Player;
};

const Container = styled.div<ContainerProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${
    ({ owner }) => colors[owner]
  };
`;

export default Circle;
