import React, { FC } from 'react';

import styled from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

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

export const Input: FC<IOwnProps> = props => <StyledInput {...props} />;

Input.defaultProps = {
  className: '',
  placeholder: '',
  type: 'text',
};

const StyledInput = styled.input`
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace01};
  padding: ${({ theme }) => theme.Spacings.FontSpace04};
  color: ${({ theme }) => theme.Colors.Black};
  border: 1px solid ${({ theme }) => theme.Colors.Gray02};
  ${fluidFontSize.Baseline()};

  &:focus,
  &:active {
    outline-color: ${({ theme }) => theme.Colors.DarkBlue};
  }
`;

export default Input;
