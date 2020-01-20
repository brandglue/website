import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import fluid from 'fluid-system';

import styled from '@theme/styled';

type StyledSystemProps = ColorProps & SpaceProps & TypographyProps;

const P = styled.p<StyledSystemProps>`
  ${color}
  ${space}
  ${fluid(typography)}
`;

P.defaultProps = {
  fontSize: [1, null, null, null, 2, 3],
  lineHeight: [1, null, null, null, 2, 3],
};

export { P };
