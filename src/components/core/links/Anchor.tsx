import { color, space, typography } from 'styled-system';

import { styled, StyledSystemTextProps } from '@styles/index';

export const Anchor = styled.a<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;
