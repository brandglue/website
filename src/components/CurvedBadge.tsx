import React, { FC } from 'react';

import styled, { css } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';

export const CurvedBadge: FC = props => <Badge>{props.children}</Badge>;

const Badge = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60vw;
  height: 35px;
  background: ${({ theme }) => theme.Colors.Gold};
  color: ${({ theme }) => theme.Colors.White};

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: -80px;
    height: 0;
    border-bottom: 35px solid ${({ theme }) => theme.Colors.Gold};
    border-right: 80px solid transparent;
    z-index: -1;
  }

  ${minMediaQuery.Medium(css`
    width: 40vw;
  `)}
`;

export default CurvedBadge;
