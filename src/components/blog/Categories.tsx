import { useStaticQuery, graphql } from 'gatsby';
import React, { FC } from 'react';

import { Box } from '@components/core';
import { css, minMediaQuery, rhythm, styled } from '@styles/index';

import { Category } from './Category';

export const Categories: FC = () => {
  const data = useStaticQuery<GatsbyTypes.blogCategoriesQuery>(graphql`
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
          <Category key={value} totalCount={totalCount} value={value} />
        ) : null;
      })}
    </CategoryGroup>
  );
};

const CategoryGroup = styled(Box)`
  margin-top: ${rhythm(1)};

  ${minMediaQuery.Medium(css`
    margin-top: 0;
    text-align: right;
  `)}
`;
