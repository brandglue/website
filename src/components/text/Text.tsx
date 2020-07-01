import { color, space, typography, variant } from 'styled-system';
import fluid from 'fluid-system';

import { customText, StyledSystemTextProps } from '@src/theme/systemProps';
import { styled, css } from '@theme/styled';
import { rhythm } from '@theme/theme';

const { standardFontSizes, standardLineHeights } = rhythm;

export const H1 = styled.h1<StyledSystemTextProps>`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    text-transform: 'uppercase';
    white-space: 'pre-wrap';
  `}

  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

// H1.defaultProps = {
//   fontSize: [4, null, 5, 6, 7, 8],
//   lineHeight: [4, null, 4, 5, 6, 7],
// };

export const H2 = styled.h2<StyledSystemTextProps>`
  ${({ theme }) =>
    variant({
      variants: {
        sectionTitle: {
          color: `${theme.colors.darkBlue}`,
          textTransform: 'uppercase',
          whiteSpace: 'pre-wrap',
        },
      },
    })}

  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

// H2.defaultProps = {
//   fontSize: [3, null, 4, 5, 6, 7],
//   lineHeight: [3, null, 3, 4, 5, 6],
//   variant: 'sectionTitle',
// };

export const H3 = styled.h3<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

// H3.defaultProps = {
//   fontSize: [2, null, 3, 4, 5, 6],
//   lineHeight: [2, null, 3, 4, 5, 6],
// };

export const H4 = styled.h4<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

// H4.defaultProps = {
//   fontSize: [1, null, null, 2, 3, 4],
//   lineHeight: [1, null, null, 2, 3, 4],
// };

export const H5 = styled.h5<StyledSystemTextProps>`
  text-transform: uppercase;
  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

// H5.defaultProps = {
//   fontSize: [1, null, null, null, 3, 4],
//   lineHeight: [1, null, null, null, 3, 4],
// };

export const P = styled.p<StyledSystemTextProps>`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.emSpace04};
  `}

  ${color}
  ${space}
  ${fluid(typography)}
`;

// P.defaultProps = {
//   fontSize: standardFontSizes,
//   lineHeight: standardLineHeights,
// };

export const Span = styled.span<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

// Span.defaultProps = {
//   fontSize: standardFontSizes,
//   lineHeight: standardLineHeights,
// };

export const Ul = styled.ul<StyledSystemTextProps>`
  ${({ theme }) => css`
    list-style: disc;
    margin: ${theme.spacings.pixelSpace05} ${theme.spacings.emSpace04};
  `}

  ${color}
  ${space}
  ${fluid(typography)}
`;

// Ul.defaultProps = {
//   fontSize: standardFontSizes,
//   lineHeight: standardLineHeights,
// };

export const Ol = styled.ol<StyledSystemTextProps>`
  ${({ theme }) => css`
    list-style: decimal;
    margin: ${theme.spacings.pixelSpace05} ${theme.spacings.emSpace04};
  `}

  ${color}
  ${space}
  ${fluid(typography)}
`;

// Ol.defaultProps = {
//   fontSize: standardFontSizes,
//   lineHeight: standardLineHeights,
// };

export const Li = styled.li<StyledSystemTextProps>`
  margin-bottom: ${({ theme }) => theme.spacings.pixelSpace05};

  ${color}
  ${space}
  ${fluid(typography)}
`;

// Li.defaultProps = {
//   fontSize: standardFontSizes,
//   lineHeight: standardLineHeights,
// };

export const Em = styled.em<StyledSystemTextProps>`
  font-style: italic;

  ${color}
  ${space}
  ${fluid(typography)}
`;

// Em.defaultProps = {
//   fontSize: standardFontSizes,
//   lineHeight: standardLineHeights,
// };

export const Strong = styled.strong<StyledSystemTextProps>`
  font-weight: 700;

  ${color}
  ${space}
  ${fluid(typography)}
`;

// Strong.defaultProps = {
//   fontSize: standardFontSizes,
//   lineHeight: standardLineHeights,
// };

export const A = styled.a<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

// A.defaultProps = {
//   fontSize: standardFontSizes,
//   lineHeight: standardLineHeights,
// };
