import styled from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.Colors.DarkBlue};
  text-transform: uppercase;
  ${fluidFontSize.StepUp4()};
`;

export default SectionTitle;
