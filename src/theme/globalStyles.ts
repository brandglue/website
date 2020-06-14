import reset from 'styled-reset';

import { createGlobalStyle, css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    ${({ theme }) => css`
      background: ${theme.Colors.White};
      color: ${theme.Colors.Black};
      font-family: ${theme.FontFamilies.Primary};
      line-height: 1.5;
      margin: 0;
    `};
  }

  /* basic resets for common tags */
  p, h1, h2, h3, h4, h5 {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace01};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;
