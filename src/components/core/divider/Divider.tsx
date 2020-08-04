import { color, space, typography, variant } from 'styled-system';

import { customText, styled, StyledSystemTextProps } from '@styles/index';

export const Divider = styled.hr<StyledSystemTextProps>`
  ${({ theme }) =>
    variant({
      variants: {
        section: {
          background: `${theme.colors.blue}`,
          height: '50px',
          marginBottom: 0,
        },
      },
    })}

  ${color}
  ${space}
  ${typography}
  ${customText}
`;

Divider.defaultProps = {
  variant: 'section',
};
