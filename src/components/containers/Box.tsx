import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';
import fluid from 'fluid-system';

import { customTextProps, ICustomTextProps } from '@theme/customProps';
import styled from '@theme/styled';

type StyledSystemProps = BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  TypographyProps & { variant?: string } & ICustomTextProps;

export const Box = styled.div<StyledSystemProps>`
  ${variant({
    variants: {
      flex: {
        display: 'flex',
      },
      flexItem: {
        flex: 'auto',
        minWidth: '0',
      },
      grid: {
        display: 'grid',
      },
    },
  })}

  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${space}
  ${fluid(typography)}
  ${customTextProps}
`;
