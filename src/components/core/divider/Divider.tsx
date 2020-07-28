import { color, space, typography, variant } from 'styled-system';

import { customText, StyledSystemTextProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';

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
