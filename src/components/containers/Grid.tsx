import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

import styled from '@theme/styled';

type StyledSystemProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  SpaceProps;

const Grid = styled.div<StyledSystemProps>`
  ${color}
  ${grid}
  ${flexbox}
  ${layout}
  ${space}
`;

Grid.defaultProps = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Grid;
