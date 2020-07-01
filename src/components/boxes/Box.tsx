import {
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';
import fluid from 'fluid-system';

import { customText, StyledSystemProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';

export const Box = styled.div<StyledSystemProps>`
  ${({ theme }) =>
    variant({
      variants: {
        section: {
          maxWidth: `${theme.spacings.maxColWidth}`,
          paddingLeft: `${theme.spacings.hzColPadding}`,
          paddingRight: `${theme.spacings.hzColPadding}`,
          margin: 'auto',
        },
        centered: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        flex: {
          display: 'flex',
        },
        flexItem: {
          flex: 'auto',
          minWidth: '0',
        },
        grid: {
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
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
  ${customText}
`;
