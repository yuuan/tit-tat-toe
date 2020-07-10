import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  wide: boolean;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = ({ children, wide, onClick }) => (
  <Container wide={wide} onClick={onClick}>
    {children}
  </Container>
);

const Container = styled.button<Props>`
  display: block;
  padding: 12px 24px;
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
  color: $color-text;
  text-align: center;
  border: solid 1px transparent;
  outline: none;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  ${({ wide }) => wide && 'width: 100%;'}
`;

export default Button;
