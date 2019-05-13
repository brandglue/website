import Button from '@components/buttons/Button';
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const CurvedButton = styled(Button)`
  ${({ theme }) => css`
    position: relative;
    background: transparent;
    color: currentColor;
    border-top: 1px solid currentColor;
    border-right: 1px solid currentColor;
    padding: ${theme.Spacings.FontSpace02};
    text-decoration: none;
    ${fluidFontSize.Baseline()};

    &:before {
      content: '';
      position: absolute;
      bottom: 48px;
      left: 0px;
      width: 90px;
      border-top: 1px solid currentColor;
      transform: rotate(148deg);
      transform-origin: 0% 0%;
    }

    &:hover {
      background: transparent;
      border-top: 1px solid currentColor;
      border-right: 1px solid currentColor;
      text-decoration: none;
      opacity: 0.9;
    }

    &:active,
    &:focus {
      background: transparent;
      border-top: 1px solid currentColor;
      border-right: 1px solid currentColor;
      text-decoration: none;
    }

    &[disabled] {
      background: ${theme.Colors.Gray02};
      pointer-events: none;
      cursor: default;
    }
  `};
`;

export default CurvedButton;
