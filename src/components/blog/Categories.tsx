import { BlogCategoriesQuery } from '@generated/graphql';
import { useStaticQuery, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import React, { FC } from 'react';

import { Box, NavLink } from '@components/core';
import { RouteParts, TopLevelPages } from '@constants/routes';
import { scale, styled } from '@styles/index';

export const Categories: FC = () => {
  const data = useStaticQuery<BlogCategoriesQuery>(graphql`
    query blogCategories {
      allMdx {
        group(field: frontmatter___categories) {
          totalCount
          value: fieldValue
        }
      }
    }
  `);

  return (
    <CategoryGroup>
      {data.allMdx.group.map(({ totalCount, value }) => {
        return value ? (
          <Category
            key={value}
            style={{ ...scale(-0.25) }}
            to={`/${TopLevelPages.Blog}/${RouteParts.Category}/${kebabCase(
              value,
            )}`}
            variant="badge"
          >
            {value} <Count>{totalCount}</Count>
          </Category>
        ) : null;
      })}
    </CategoryGroup>
  );
};

const CategoryGroup = styled(Box)`
  text-align: right;
`;

const Category = styled(NavLink)`
  margin: 0 0 1em 1em;
  font-weight: 700;
`;
const Count = styled.span`
  background: ${({ theme }) => theme.colors.gray00};
  padding: 0.2em;
  margin: 0 0.2em;
  border-radius: 5px;
  font-weight: 400;

  ${/* sc-selector */ Category}:hover & {
    color: ${({ theme }) => theme.colors.black};
  }
`;
