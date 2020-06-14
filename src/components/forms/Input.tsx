import React, { FC } from 'react';
import { border, color, layout, space, typography } from 'styled-system';
import fluid from 'fluid-system';

import { StyledSystemProps } from '@src/theme/systemProps';
import { css, styled } from '@theme/styled';

interface IOwnProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // restrict type further than the 'string' type provided by React typings
  type?:
    | 'checkbox'
    | 'date'
    | 'email'
    | 'file'
    | 'hidden'
    | 'password'
    | 'radio'
    | 'range'
    | 'tel'
    | 'text'
    | 'url';
}

export const Input: FC<IOwnProps & StyledSystemProps> = (props) => (
  <StyledInput {...props} />
);

Input.defaultProps = {
  className: '',
  placeholder: '',
  type: 'text',
};

const StyledInput = styled.input`
  ${({ theme }) => css`
    margin-bottom: ${theme.Spacings.StaticSpace01};
    padding: ${theme.Spacings.FontSpace04};
    color: ${theme.Colors.Black};
    border: 1px solid ${theme.Colors.Gray02};

    &:focus,
    &:active {
      outline-color: ${({ theme }) => theme.Colors.DarkBlue};
    }
  `}

  ${border}
  ${color}
  ${layout}
  ${space}
  ${fluid(typography)}
`;

export const TextArea: FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & StyledSystemProps
> = (props) => <StyledTextArea {...props} />;

TextArea.defaultProps = {
  className: '',
  placeholder: '',
};

const StyledTextArea = styled.textarea`
  ${({ theme }) => css`
    height: 100%;
    min-height: 200px;
    margin-bottom: ${theme.Spacings.StaticSpace01};
    padding: ${theme.Spacings.FontSpace04};
    color: ${theme.Colors.Black};
    border: 1px solid ${theme.Colors.Gray02};

    &:focus,
    &:active {
      outline-color: ${theme.Colors.DarkBlue};
    }
  `}

  ${border}
  ${color}
  ${layout}
  ${space}
  ${fluid(typography)}
`;
