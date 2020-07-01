import reset from 'styled-reset';

import { createGlobalStyle, css } from '@theme/styled';

export const GlobalStyles = createGlobalStyle``;

// export const GlobalStyles = createGlobalStyle`
//   ${reset}

//   body {
//     ${({ theme }) => css`
//       background: ${theme.colors.white};
//       color: ${theme.colors.black};
//       /* font-family: ${theme.fontFamilies.primary};
//       line-height: 1.5; */
//       margin: 0;
//     `};
//   }

//   /* basic resets for common tags */
//   p, h1, h2, h3, h4, h5 {
//     margin: 0;
//     margin-bottom: ${({ theme }) => theme.spacings.pixelSpace01};
//   }

//   *, *:before, *:after {
//     box-sizing: border-box;
//   }
// `;
