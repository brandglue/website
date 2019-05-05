import React, { FC } from 'react';

import styled, { css } from '@theme/styled';

export const CurvedBadge: FC = props => <Badge>{props.children}</Badge>;

const Badge = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 30vw;
    height: 35px;
    background: ${theme.Colors.Gold};
    color: ${theme.Colors.White};

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      right: -80px;
      height: 0;
      border-bottom: 35px solid ${theme.Colors.Gold};
      border-right: 80px solid transparent;
      z-index: -1;
    }
  `}
`;

export default CurvedBadge;
