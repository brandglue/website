import { color, space, typography, variant } from 'styled-system';

import { customText, StyledSystemTextProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';

export const H1 = styled.h1<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
  ${customText}
`;

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
  ${typography}
  ${customText}
`;

export const H3 = styled.h3<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
  ${customText}
`;

export const H4 = styled.h4<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
  ${customText}
`;

export const H5 = styled.h5<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
  ${customText}
`;

export const P = styled.p<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;

export const Span = styled.span<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;

export const Ul = styled.ul<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;

export const Ol = styled.ol<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;

export const Li = styled.li<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;

export const Em = styled.em<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;

export const Strong = styled.strong<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;
