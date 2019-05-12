import Anchor from '@components/Anchor';
import styled from '@theme/styled';

export const TextLink = styled(Anchor)`
  color: ${({ theme }) => theme.Colors.DarkBlue};
  text-decoration: underline;
`;

export default TextLink;
