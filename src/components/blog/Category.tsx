import { kebabCase } from 'lodash';
import React, { FC } from 'react';

import { NavLink } from '@components/core';
import { RouteParts, TopLevelPages } from '@constants/routes';
import { scale, styled } from '@styles/index';

interface IProps {
  totalCount?: number;
  value: string;
}

export const Category: FC<IProps> = ({ totalCount, value }) => {
  return (
    <Link
      to={`/${TopLevelPages.Blog}/${RouteParts.Category}/${kebabCase(value)}`}
      variant="badge"
    >
      {value} {totalCount && <Count>{totalCount}</Count>}
    </Link>
  );
};

const Link = styled(NavLink)`
  margin: 0 0 1em 1em;
  font-size: ${scale(-0.25).fontSize};
  line-height: ${scale(-0.25).lineHeight};
  font-weight: 700;
`;

const Count = styled.span`
  background: ${({ theme }) => theme.colors.gray00};
  padding: 0.2em;
  margin: 0 0.2em;
  border-radius: 5px;
  font-weight: 400;

  ${/* sc-selector */ Link}:hover & {
    color: ${({ theme }) => theme.colors.black};
  }
`;
