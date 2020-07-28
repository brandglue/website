import { default as GatsbyImage } from 'gatsby-image';
import { border, flexbox, grid, layout, position, space } from 'styled-system';

import { StyledSystemLayoutProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';

export const Image = styled(GatsbyImage)<StyledSystemLayoutProps>`
  ${border}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${space}
`;
