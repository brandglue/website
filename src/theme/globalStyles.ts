import Typography from 'typography';
import gray from 'gray-percentage';
import verticalRhythm from 'compass-vertical-rhythm';

import { createGlobalStyle, css } from '@theme/styled';

import { theme } from './theme';

export const typography = new Typography({
  includeNormalize: true,

  baseFontSize: '18px',
  baseLineHeight: 1.58,
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
    color: ${theme.colors.black};
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
    margin-bottom: ${rhythm(0.5)};
  }

  h1, h2, h3 {
    color: ${theme.colors.darkBlue};
    text-transform: uppercase;
    white-space: pre-wrap;
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
      list-style: none;
      margin-left: 0;
    }

    .breadcrumb__list__item {
      display: inline;
    }
  }
`;

/*
 * TypographyJS handles fonts and all text-related spacing concerns (margins, padding, etc).
 * It is rendered using gatsby plugin so it must be default exported.
 */
// export const typography = new Typography({
//   overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
//     const vr = verticalRhythm({
//       baseFontSize: '17px',
//       baseLineHeight: '28px',
//     });

//       'blockquote': {
//         ...scale(1 / 5),
//         borderLeft: `${rhythm(6 / 16)} solid ${theme.colors.gray03}`,
//         paddingLeft: rhythm(10 / 16),
//         marginLeft: 0,
//         marginRight: 0,
//       },
//       'blockquote > :last-child': {
//         marginBottom: 0,
//       },
//       'blockquote cite': {
//         ...adjustFontSizeTo(options.baseFontSize),
//         color: options.bodyColor,
//         fontStyle: 'normal',
//         fontWeight: options.bodyWeight,
//       },
//       'blockquote cite:before': {
//         content: '"— "',
//       },
//       // [MOBILE_MEDIA_QUERY]: {
//       //   html: {
//       //     ...vr.establishBaseline(),
//       //   },
//       //   blockquote: {
//       //     borderLeft: `${rhythm(3 / 16)} solid ${theme.colors.gray03}`,
//       //     paddingLeft: rhythm(9 / 16),
//       //     marginLeft: rhythm(-3 / 4),
//       //     marginRight: 0,
//       //   },
//       // },
//     };
//   },
// });
