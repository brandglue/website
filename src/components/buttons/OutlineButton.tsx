import Button from '@components/buttons/Button';
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const OutlineButton = styled(Button)`
  ${({ theme }) => css`
    max-width: 250px;
    color: currentColor;
    border: 1px solid currentColor;
    border-radius: 4px;
    padding: ${theme.Spacings.FontSpace02};
    text-decoration: none;
    ${fluidFontSize.Baseline()};

    &:hover {
      border: 1px solid currentColor;
      text-decoration: none;
    }

    &:active,
    &:focus {
      border: 1px solid currentColor;
      text-decoration: none;
    }

    &[disabled] {
      background: ${theme.Colors.Gray02};
      border: 1px solid ${theme.Colors.Gray02};
      pointer-events: none;
      cursor: default;
    }
  `};
`;

export default OutlineButton;
