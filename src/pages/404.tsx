import React, { FC } from 'react';

import { Box, Divider } from '@components/core';
import { scale, styled } from '@styles/index';

export const NotFound: FC = () => {
  return (
    <>
      <Divider />
      <Container variant="section">
        <div>Whoops! We cannot find that page, brb.</div>
        <ErrorCode>404</ErrorCode>
      </Container>
    </>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorCode = styled.h1`
  font-size: ${scale(2.5).fontSize};
`;

export default NotFound;
