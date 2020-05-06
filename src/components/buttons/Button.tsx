import React, { FC } from 'react';

import styled from '@theme/styled';

interface IOwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string; // allow Button styling to be used for links via SC's "as" prop
}

export const Button: FC<IOwnProps> = (props) => (
  <StyledButton
    className={props.className}
    disabled={props.disabled}
    onClick={props.onClick}
    type={props.type}
  >
    {props.children}
  </StyledButton>
);

Button.defaultProps = {
  className: '',
  disabled: false,
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
    color: ${({ theme }) => theme.Colors.Gray02};
    pointer-events: none;
    cursor: default;
  }
`;

export default Button;
