import React, { FC } from 'react';

import styled from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const TextArea: FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = props => (
  <StyledTextArea
    className={props.className}
    name={props.name}
    onChange={props.onChange}
    placeholder={props.placeholder}
    value={props.value}
  />
);

TextArea.defaultProps = {
  className: '',
  placeholder: '',
};

const StyledTextArea = styled.textarea`
  height: 100%;
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace01};
  padding: ${({ theme }) => theme.Spacings.FontSpace04};
  color: ${({ theme }) => theme.Colors.Black};
  border: 1px solid ${({ theme }) => theme.Colors.Gray};
  ${fluidFontSize.Baseline()};

  &:focus,
  &:active {
    outline-color: ${({ theme }) => theme.Colors.DarkBlue};
  }
`;

export default TextArea;
