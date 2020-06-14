import React, { FC } from 'react';
import {
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';
import fluid from 'fluid-system';

import { customText, StyledSystemProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';

interface IOwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // allow Button styling to be used for links via styled-component's "as" prop
  to?: string;
}

export const Button: FC<IOwnProps & StyledSystemProps> = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
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

${({ theme }) =>
  variant({
    variants: {
      primary: {
        'maxWidth': '300px',
        'background': `${theme.Colors.DarkBlue}`,
        'color': `${theme.Colors.White}`,
        'border': '1px solid transparent',
        'borderRadius': '4px',

        '&:hover': {
          background: `${theme.Colors.DarkBlue}`,
          border: '1px solid transparent',
          opacity: 0.9,
        },

        '&:active': {
          background: `${theme.Colors.DarkBlue}`,
          border: `1px solid ${theme.Colors.Blue}`,
        },

        '&:focus': {
          background: `${theme.Colors.DarkBlue}`,
          border: `1px solid ${theme.Colors.Blue}`,
        },

        '&[disabled]': {
          background: `${theme.Colors.Gray02}`,
          pointerEvents: 'none',
          cursor: 'default',
        },
      },
      outline: {
        'maxWidth': '250px',
        'color': 'currentColor',
        'border': '1px solid currentColor',
        'borderRadius': '4px',
        'textDecoration': 'none',

        '&:hover': {
          border: '1px solid currentColor',
          textDecoration: 'none',
        },

        '&:active': {
          border: '1px solid currentColor',
          textDecoration: 'none',
        },

        '&:focus': {
          border: '1px solid currentColor',
          textDecoration: 'none',
        },

        '&[disabled]': {
          background: `${theme.Colors.Gray02}`,
          border: `1px solid ${theme.Colors.Gray02}`,
          pointerEvents: 'none',
          cursor: 'default',
        },
      },
    },
  })}

  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${space}
  ${fluid(typography)}
  ${customText}
`;
