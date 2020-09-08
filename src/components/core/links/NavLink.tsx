import { LinkGetProps } from '@reach/router';
import { ArrowRight } from '@styled-icons/bootstrap';
import cx from 'classnames';
import { Link, GatsbyLinkProps } from 'gatsby';
import React, { FC } from 'react';
import { color, space, typography, variant } from 'styled-system';

import { customText, StyledSystemProps, styled } from '@styles/index';

interface IProps {
  hasArrow?: boolean;
}

const WrappedLink: FC<GatsbyLinkProps<unknown> & IProps> = (props) => {
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
      onClick={props.onClick}
      style={props.style}
      to={props.to}
    >
      {props.children} {props.hasArrow && <Arrow />}
    </Link>
  );
};

WrappedLink.defaultProps = {
  className: '',
};

const Arrow = styled(ArrowRight)`
  width: 20px;
`;

export const NavLink = styled(WrappedLink)<StyledSystemProps>`
  ${({ theme }) =>
    variant({
      variants: {
        invisible: {
          'color': 'currentColor',
          'textDecoration': 'none',
          'border': 'none',

          '&:hover': {
            opacity: `1`,
          },
        },
        title: {
          'display': 'inline-block',
          'color': 'currentColor',
          'textDecoration': 'none',
          'border': 'none',

          '&:hover': {
            color: `${theme.colors.blue}`,
            opacity: `1`,
          },
        },
        button: {
          'display': 'inline-block',
          'background': `${theme.colors.darkBlue}`,
          'color': `${theme.colors.white}`,
          'textDecoration': 'none',
          'border': 'none',
          'textTransform': 'uppercase',
          'padding': '0.6em',
          'borderRadius': '5px',

          '&:hover': {
            background: `${theme.colors.blue}`,
            opacity: `1`,
          },
        },
        badge: {
          'display': 'inline-block',
          'background': `${theme.colors.lightBlue}`,
          'color': `${theme.colors.gray06}`,
          'textDecoration': 'none',
          'border': 'none',
          'padding': '0.6em',
          'borderRadius': '5px',

          '&:hover': {
            background: `${theme.colors.blue}`,
            color: `${theme.colors.white}`,
          },
        },
      },
    })}

  ${color}
  ${space}
  ${typography}
  ${customText}
`;
