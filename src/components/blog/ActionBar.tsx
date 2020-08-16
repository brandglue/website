import React, { FC } from 'react';

import { Box } from '@components/core';
import { rhythm, styled } from '@styles/index';

import { Categories } from './Categories';
import { SearchForm } from './SearchForm';

export const ActionBar: FC = () => {
  return (
    <ActionBarWrapper>
      <SearchForm />
      <Categories />
    </ActionBarWrapper>
  );
};

const ActionBarWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${rhythm(1)};

  > :first-child {
    margin-right: 30%;
    flex: 0 0 auto;
  }
`;
