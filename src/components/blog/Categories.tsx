import { useStaticQuery, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import React, { FC } from 'react';

import { Box, NavLink } from '@components/core';
import { RouteParts, TopLevelPages } from '@constants/routes';
import { BlogCategoriesQuery } from '@generated/graphql';
import { rhythm, scale, styled } from '@styles/index';

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
    <Box>
      {data.allMdx.group.map(({ value }) => {
        return value ? (
          <Category
            key={value}
            style={{ ...scale(-0.25) }}
            to={`/${TopLevelPages.Blog}/${RouteParts.Category}/${kebabCase(
              value,
            )}`}
            variant="button"
          >
            {value}
          </Category>
        ) : null;
      })}
    </Box>
  );
};

const Category = styled(NavLink)`
  margin-left: ${rhythm(0.25)};

  &:first-child {
    margin: 0;
  }
`;
