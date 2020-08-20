import { BoxArrowUpRight } from '@styled-icons/bootstrap';
import React, { FC } from 'react';
import { color, space, typography, variant } from 'styled-system';

import { styled, StyledSystemTextProps } from '@styles/index';

interface IProps {
  hasArrow?: boolean;
}

type Props = IProps &
  StyledSystemTextProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor: FC<Props> = ({ hasArrow = true, ...props }) => {
  return (
    <StyledAnchor {...props}>
      {props.children} {hasArrow && <Arrow />}
    </StyledAnchor>
  );
};

Anchor.defaultProps = {
  className: '',
};

const StyledAnchor = styled.a<StyledSystemTextProps>`
  ${() =>
    variant({
      variants: {
        invisible: {
          color: 'currentColor',
          textDecoration: 'none',
          border: 'none',
        },
      },
    })}

  ${color}
  ${space}
  ${typography}
`;

const Arrow = styled(BoxArrowUpRight)`
  width: 14px;
  vertical-align: baseline;
`;
