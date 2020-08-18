import { BoxArrowUpRight } from '@styled-icons/bootstrap';
import React, { FC } from 'react';
import { color, space, typography, variant } from 'styled-system';

import { styled, StyledSystemTextProps } from '@styles/index';

interface IProps {
  hasArrow?: boolean;
}

export const Anchor: FC<IProps & StyledSystemTextProps> = ({
  children,
  className,
  hasArrow = true,
  variant,
}) => {
  return (
    <StyledAnchor className={className} variant={variant}>
      {children} {hasArrow && <Arrow />}
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
