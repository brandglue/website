import React, { FC } from 'react';

import { IHex } from '@models/Hex';
import styled, { css } from '@theme/styled';

interface IOwnProps extends React.HTMLAttributes<HTMLHRElement> {
  color: IHex | 'transparent';
  height: number | string;
}

interface IStyles {
  color: IHex | 'transparent';
  styleHeight: string;
}

export const HorizontalDivider: FC<IOwnProps> = props => {
  const styleHeight =
    typeof props.height === 'string' ? props.height : `${props.height}px`;

  return (
    <StyledHorizontalRule
      className={props.className}
      color={props.color}
      styleHeight={styleHeight}
    >
      {props.children}
    </StyledHorizontalRule>
  );
};

HorizontalDivider.defaultProps = {
  className: '',
};

const StyledHorizontalRule = styled.hr<IStyles>`
  ${({ color, styleHeight }) => css`
    background: ${color};
    height: ${styleHeight};
    margin: 0;
  `};
`;

export default HorizontalDivider;
