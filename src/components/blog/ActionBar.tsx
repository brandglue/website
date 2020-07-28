import React, { FC } from 'react';

import { Box } from '@components/core';
import { rhythm } from '@theme/globalStyles';
import { styled } from '@theme/styled';

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
  align-items: center;
  margin-bottom: ${rhythm(1)};
`;
