import React, { FC } from 'react';

import styled, { css } from '@theme/styled';
import { fluidFontSize, minMediaQuery } from '@theme/utils';

export const HireDivider: FC = () => (
  <>
    <HorizontalDivider />
    <PageDivider>
      <div>Social experts. Loyal partners. Data-driven results.</div>
      <div>{"That's what you get when you hire BrandGlue."}</div>
    </PageDivider>
  </>
);

const HorizontalDivider = styled.div`
  background: ${({ theme }) => theme.Colors.Gold};
  height: ${({ theme }) => theme.Spacings.StaticSpace00};
`;

const PageDivider = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    justify-content: center;
    background: ${theme.Colors.DarkBlue};
    color: ${theme.Colors.White};
    text-transform: uppercase;
    padding: ${theme.Spacings.FontSpace04};
    ${fluidFontSize.StepUp1()};

    div:first-child {
      color: ${theme.Colors.Gold};
    }

    ${minMediaQuery.Medium(css`
      align-items: center;
    `)}
  `};
`;

export default HireDivider;
