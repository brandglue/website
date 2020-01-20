import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

import styled from '@theme/styled';

type StyledSystemProps = ColorProps & FlexboxProps & LayoutProps & SpaceProps;

const Flex = styled.div<StyledSystemProps>`
  min-width: 0;
  ${color}
  ${flexbox}
  ${layout}
  ${space}
`;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
