import { color, space, typography } from 'styled-system';
import fluid from 'fluid-system';

import { StyledSystemTextProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';
import { rhythm } from '@theme/theme';

const { standardFontSizes, standardLineHeights } = rhythm;

export const Anchor = styled.a<StyledSystemTextProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

Anchor.defaultProps = {
  // fontSize: standardFontSizes,
  // lineHeight: standardLineHeights,
};
