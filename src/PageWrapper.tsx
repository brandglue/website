import React, { ReactNode } from 'react';

import { Footer, Header } from '@components/common';
import { GlobalStyles } from '@styles/globalStyles';
import { css, styled } from '@styles/index';

export const PageWrapper = ({ element }: { element: ReactNode }) => {
  return (
    <>
      <noscript>
        <style>{'html { visibility: visible !important; }'}</style>
        <NoJs>This site works better with JavaScript enabled.</NoJs>
      </noscript>
      <GlobalStyles />
      <Header />
      {element}
      <Footer />
    </>
  );
};

const NoJs = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background: ${theme.colors.gray04};
    color: ${theme.colors.white};
  `}
`;

export default PageWrapper;
