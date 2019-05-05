import Button from '@components/Button';
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const ButtonCurved = styled(Button)`
  ${({ theme }) => css`
    position: relative;
    background: transparent;
    color: currentColor;
    border-top: 1px solid currentColor;
    border-right: 1px solid currentColor;
    padding: ${theme.Spacings.FontSpace2};
    ${fluidFontSize.Baseline()};

    &:before {
      content: '';
      position: absolute;
      bottom: 44px;
      left: 0px;
      width: 80px;
      border-top: 1px solid currentColor;
      transform: rotate(148deg);
      transform-origin: 0% 0%;
    }

    &:hover {
      background: transparent;
      border-top: 1px solid currentColor;
      border-right: 1px solid currentColor;
      opacity: 0.9;
    }

    &:active,
    &:focus {
      background: transparent;
      border-top: 1px solid currentColor;
      border-right: 1px solid currentColor;
    }

    &[disabled] {
      background: ${theme.Colors.Gray};
      pointer-events: none;
      cursor: default;
    }
  `};
`;

export default ButtonCurved;
