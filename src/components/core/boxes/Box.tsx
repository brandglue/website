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

import { customText, rhythm, styled, StyledSystemProps } from '@styles/index';

export const Box = styled.div<StyledSystemProps>`
  ${({ theme }) =>
    variant({
      variants: {
        section: {
          maxWidth: `${theme.spacings.maxContentColWidth}`,
          padding: `${rhythm(2)} ${rhythm(1)}`,
          margin: 'auto',
        },
        text: {
          maxWidth: `${theme.spacings.maxTextColWidth}`,
          padding: `${rhythm(1)}`,
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
  ${typography}
  ${customText}
`;
