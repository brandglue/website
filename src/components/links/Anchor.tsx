import { color, space, typography } from 'styled-system';

import { StyledSystemTextProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';

export const Anchor = styled.a<StyledSystemTextProps>`
  ${color}
  ${space}
  ${typography}
`;
