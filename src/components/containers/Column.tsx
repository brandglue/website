import { Box } from '@components/containers/Box';
import styled from '@theme/styled';

export const Column = styled(Box)`
  max-width: ${({ theme }) => theme.maxColWidth}px;
  padding-left: ${({ theme }) => theme.hzColPadding}px;
  padding-right: ${({ theme }) => theme.hzColPadding}px;
  margin: auto;
`;
