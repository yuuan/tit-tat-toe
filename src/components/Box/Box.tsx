import React from 'react';
import styled from 'styled-components';
import { Position } from '../../interfaces';
import { interfaces } from '../../modules/owner';
import Circle from '../Circle';

interface Props {
  position: Position;
  owner: interfaces.Owner;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Box: React.FC<Props> = ({ position, owner, onClick }) => (
  <Container data-position={position} onClick={onClick}>
    { owner !== null && <Circle owner={owner} /> }
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid #3c3c37;
  box-sizing: border-box;
`;

export default Box;
