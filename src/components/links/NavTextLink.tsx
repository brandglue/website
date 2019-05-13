import NavLink from '@components/links/NavLink';
import styled from '@theme/styled';

export const NavTextLink = styled(NavLink)`
  display: inline;
  color: ${({ theme }) => theme.Colors.DarkBlue};
  text-decoration: underline;
`;

export default NavTextLink;
