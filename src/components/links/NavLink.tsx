import React, { FC } from 'react';
import { LinkGetProps } from '@reach/router';
import { Link, GatsbyLinkProps } from 'gatsby';
import cx from 'classnames';
import { color, space, typography, variant } from 'styled-system';
import fluid from 'fluid-system';

import { customText, StyledSystemProps } from '@src/theme/systemProps';
import { styled } from '@theme/styled';

const WrappedLink: FC<GatsbyLinkProps<unknown>> = (props) => {
  const isActive = ({ isCurrent, isPartiallyCurrent }: LinkGetProps) => {
    /*
      IMPORTANT:
      This can blow away styled-component classes if you're not careful.
      This is why this component is not directly used, and instead
      styled-component wrappers are used via other components. That way
      the styled-component class is applied one level higher.
    */
    const className = cx(props.className, {
      isActive: isCurrent || isPartiallyCurrent,
    });

    return { className };
  };

  return (
    <Link className={props.className} getProps={isActive} to={props.to}>
      {props.children}
    </Link>
  );
};

WrappedLink.defaultProps = {
  className: '',
};

export const NavLink = styled(WrappedLink)<StyledSystemProps>`
  ${({ theme }) =>
    variant({
      variants: {
        button: {
          display: 'inline-block',
          color: 'currentColor',
          textDecoration: 'none',
        },
        textLink: {
          display: 'inline',
          color: `${theme.colors.blue}`,
          textDecoration: 'underline',
        },
      },
    })}

  ${color}
  ${space}
  ${fluid(typography)}
  ${customText}
`;

NavLink.defaultProps = {
  fontSize: [1, null, null, null, 2, 3],
  lineHeight: [1, null, null, null, 2, 3],
  variant: 'textLink',
};
