import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';
import fluid from 'fluid-system';

import { customText, StyledSystemProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';

type StyledSystemTextProps = ColorProps & SpaceProps & TypographyProps;
type StyledSystemHeadingProps = StyledSystemProps;

const standardFontSizes = [1, null, null, null, 2, 3];
const standardLineHeights = [1, null, null, null, 2, 3];

const H1 = styled.h1<StyledSystemHeadingProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

H1.defaultProps = {
  fontSize: [4, null, 5, 6, 7, 8],
  lineHeight: [4, null, 4, 5, 6, 7],
};

const H2 = styled.h2<StyledSystemHeadingProps>`
  ${({ theme }) =>
    variant({
      variants: {
        sectionTitle: {
          color: `${theme.Colors.DarkBlue}`,
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

H2.defaultProps = {
  fontSize: [3, null, 4, 5, 6, 7],
  lineHeight: [3, null, 3, 4, 5, 6],
  variant: 'sectionTitle',
};

const H3 = styled.h3<StyledSystemHeadingProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

H3.defaultProps = {
  fontSize: [2, null, 3, 4, 5, 6],
  lineHeight: [2, null, 3, 4, 5, 6],
};

const H4 = styled.h4<StyledSystemHeadingProps>`
  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

H4.defaultProps = {
  fontSize: [1, null, null, 2, 3, 4],
  lineHeight: [1, null, null, 2, 3, 4],
};

const H5 = styled.h5<StyledSystemHeadingProps>`
  text-transform: uppercase;
  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

H5.defaultProps = {
  fontSize: [1, null, null, null, 3, 4],
  lineHeight: [1, null, null, null, 3, 4],
};

const P = styled.p<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

P.defaultProps = {
  fontSize: standardFontSizes,
  lineHeight: standardLineHeights,
};

const Ul = styled.ul<StyledSystemTextProps>`
  list-style: disc;
  ${color}
  ${space}
  ${fluid(typography)}
`;

Ul.defaultProps = {
  fontSize: standardFontSizes,
  lineHeight: standardLineHeights,
};

const Ol = styled.ol<StyledSystemTextProps>`
  list-style: decimal;
  ${color}
  ${space}
  ${fluid(typography)}
`;

Ol.defaultProps = {
  fontSize: standardFontSizes,
  lineHeight: standardLineHeights,
};

const Li = styled.li<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

Li.defaultProps = {
  fontSize: standardFontSizes,
  lineHeight: standardLineHeights,
};

const Em = styled.em<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

Em.defaultProps = {
  fontSize: standardFontSizes,
  lineHeight: standardLineHeights,
};

const Strong = styled.strong<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

Strong.defaultProps = {
  fontSize: standardFontSizes,
  lineHeight: standardLineHeights,
};

export { H1, H2, H3, H4, H5, P, Ul, Ol, Li, Em, Strong };
