import { H2 } from '@components/text/Text';
import styled from '@theme/styled';

export const SectionTitle = styled(H2)`
  color: ${({ theme }) => theme.Colors.DarkBlue};
  text-transform: uppercase;
  white-space: pre-wrap;
`;
