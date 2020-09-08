import { default as GatsbyImage } from 'gatsby-image';
import { border, flexbox, grid, layout, position, space } from 'styled-system';

import { styled, StyledSystemLayoutProps } from '@styles/index';

export const Image = styled(GatsbyImage)<StyledSystemLayoutProps>`
  max-width: 100%;

  ${border}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${space}
`;
