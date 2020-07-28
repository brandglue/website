import React, { FC } from 'react';

import { Box, Button } from '@components/core';
import { styled, css } from '@theme/styled';
import { rhythm } from '@theme/globalStyles';

interface IProps {
  allLoaded: boolean;
  handleLoadMore: () => void;
}

export const LoadMore: FC<IProps> = ({ allLoaded, handleLoadMore }) => {
  return !allLoaded ? (
    <Wrapper variant="centered">
      <LoadMoreButton
        disabled={allLoaded}
        onClick={handleLoadMore}
        variant="outline"
      >
        See More +
      </LoadMoreButton>
    </Wrapper>
  ) : (
    <Box variant="centered">All Posts Loaded</Box>
  );
};

const Wrapper = styled(Box)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.darkBlue};
    margin-bottom: ${rhythm(1)};
  `}
`;

const LoadMoreButton = styled(Button)`
  ${({ theme }) => css`
    transform: translateY(50%);
    padding: 0.2em 1.2em;
    background: ${theme.colors.gray00};
    color: ${theme.colors.darkBlue};
    border-radius: 0;
    font-weight: 700;
    text-transform: uppercase;

    &:hover,
    &:active,
    &:focus {
      background: ${theme.colors.gray01};
    }
  `}
`;
