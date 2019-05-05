import Button from '@components/Button';
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const CurvedButton = styled(Button)`
  ${({ theme }) => css`
    position: relative;
    background: transparent;
    color: ${theme.Colors.White};
    border-top: 1px solid ${theme.Colors.White};
    border-right: 1px solid ${theme.Colors.White};
    padding: ${theme.Spacings.FontSpace2};
    ${fluidFontSize.Baseline()};

    &:before {
      content: '';
      position: absolute;
      bottom: 44px;
      left: 0px;
      width: 80px;
      border-top: 1px solid ${theme.Colors.White};
      transform: rotate(148deg);
      transform-origin: 0% 0%;
    }

    &:hover {
      background: transparent;
      border-top: 1px solid ${theme.Colors.White};
      border-right: 1px solid ${theme.Colors.White};
      opacity: 0.9;
    }

    &:active,
    &:focus {
      background: transparent;
      border-top: 1px solid ${theme.Colors.White};
      border-right: 1px solid ${theme.Colors.White};
    }

    &[disabled] {
      background: ${theme.Colors.Gray};
      pointer-events: none;
      cursor: default;
    }
  `};
`;

export default CurvedButton;
