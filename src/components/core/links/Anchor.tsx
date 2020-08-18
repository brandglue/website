import { color, space, typography, variant } from 'styled-system';

import { styled, StyledSystemTextProps } from '@styles/index';

export const Anchor = styled.a<StyledSystemTextProps>`
  ${() =>
    variant({
      variants: {
        invisible: {
          color: 'currentColor',
          textDecoration: 'none',
          border: 'none',
        },
      },
    })}

  ${color}
  ${space}
  ${typography}
`;
