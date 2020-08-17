import Typography from 'typography';

import { createGlobalStyle } from './styled';
import { theme } from './theme';

export const typography = new Typography({
  includeNormalize: true,

  baseFontSize: '19px',
  baseLineHeight: 1.78,
  scaleRatio: 3,

  googleFonts: [
    {
      name: 'Lato',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
});

export const { scale, rhythm, options } = typography;

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.white};
    color: ${theme.colors.gray06};
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
    line-height: 1.3;
  }

  h1, h2 {
    color: ${theme.colors.darkBlue};
    text-transform: uppercase;
    white-space: pre-wrap;
    margin-bottom: ${rhythm(1)};
  }

  h3, h4, h5 {
    margin-bottom: ${rhythm(0.5)};
  }

  h5 {
    text-transform: uppercase;
  }

  p {
    font-weight: 400;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li > ol, li > ul {
    margin-left: 20px;
    margin-bottom: 0;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }

  /* Styling breadcrumbs here because the Breadcrumb plugin component doesn't give direct access to the parent wrappers */
  .breadcrumb {
    .breadcrumb__list {
      font-size: ${scale(-0.25).fontSize};
      list-style: none;
      margin-left: 0;
    }

    .breadcrumb__list__item {
      display: inline;
    }
  }
`;
