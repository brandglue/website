import Button from '@components/buttons/Button';
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const PrimaryButton = styled(Button)`
  ${({ theme }) => css`
    max-width: 300px;
    background: ${theme.Colors.DarkBlue};
    color: ${theme.Colors.White};
    border: 1px solid transparent;
    border-radius: 4px;
    padding: ${theme.Spacings.FontSpace02};
    ${fluidFontSize.Baseline()};

    &:hover {
      background: ${theme.Colors.DarkBlue};
      border: 1px solid transparent;
      opacity: 0.9;
    }

    &:active,
    &:focus {
      background: ${theme.Colors.DarkBlue};
      border: 1px solid ${theme.Colors.Blue};
    }

    &[disabled] {
      background: ${theme.Colors.Gray02};
      pointer-events: none;
      cursor: default;
    }
  `};
`;

export default PrimaryButton;
