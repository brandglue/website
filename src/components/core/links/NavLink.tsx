import React, { FC } from 'react';
import { LinkGetProps } from '@reach/router';
import { Link, GatsbyLinkProps } from 'gatsby';
import cx from 'classnames';
import { color, space, typography, variant } from 'styled-system';

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
    <Link
      className={props.className}
      getProps={isActive}
      style={props.style}
      to={props.to}
    >
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
        invisible: {
          color: 'currentColor',
          textDecoration: 'none',
        },
        textLink: {
          display: 'inline',
          color: `${theme.colors.blue}`,
          paddingBottom: '1px',
          borderBottom: `1px solid currentColor`,
          textDecoration: 'none',
        },
        title: {
          display: 'inline-block',
          color: 'currentColor',
          textDecoration: 'none',
        },
        button: {
          display: 'inline-block',
          background: `${theme.colors.blue}`,
          color: `${theme.colors.white}`,
          textDecoration: 'none',
          textTransform: 'uppercase',
          padding: '0.4em',
        },
      },
    })}

  ${color}
  ${space}
  ${typography}
  ${customText}
`;

NavLink.defaultProps = {
  variant: 'textLink',
};