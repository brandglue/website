import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import fluid from 'fluid-system';

import Link from '@components/links/Link';
import styled from '@theme/styled';

type StyledSystemProps = ColorProps & SpaceProps & TypographyProps;

export const NavTextLink = styled(Link)<StyledSystemProps>`
  display: inline;
  color: ${({ theme }) => theme.Colors.Blue};
  text-decoration: underline;
  ${color}
  ${space}
  ${fluid(typography)}
`;

NavTextLink.defaultProps = {
  fontSize: [1, null, null, null, 2, 3],
  lineHeight: [1, null, null, null, 2, 3],
};

export default NavTextLink;
