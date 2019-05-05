import React, { FC } from 'react';

import styled from '@theme/styled';

interface IOwnProps extends React.HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<IOwnProps> = props => (
  <StyledButton
    className={props.className}
    disabled={props.isDisabled}
    onClick={props.onClick}
    type={props.type}
  >
    {props.children}
  </StyledButton>
);

Button.defaultProps = {
  className: '',
  isDisabled: false,
  onClick: () => undefined,
  type: 'button',
};

const StyledButton = styled.button`
  display: inline-block;
  width: auto;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  border-radius: 0;
  outline: none;
  box-shadow: none;

  &:hover {
    background: transparent;
    border: 0;
    box-shadow: none;
  }

  &:active,
  &:focus {
    background: transparent;
    border: 0;
    box-shadow: none;
  }

  &[disabled] {
    color: ${({ theme }) => theme.Colors.Gray};
    pointer-events: none;
    cursor: default;
  }
`;

export default Button;
