import styled from 'styled-components';
import React from 'react';
const ButtonContainer = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  width: 100px;
  height: 30px;
  border-radius: 5px;
`;

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Button = (props: ButtonProps) => {
  return <ButtonContainer>{props.label}</ButtonContainer>;
};
