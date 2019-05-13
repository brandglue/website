import React, { FC } from 'react';
import { Link, LinkProps, LinkGetProps } from '@reach/router';
import cx from 'classnames';

export const WrappedLink: FC<LinkProps<{}>> = props => {
  const isActive = ({ isCurrent, isPartiallyCurrent }: LinkGetProps) => {
    /*
      IMPORTANT:
      This can blow away styled-component classes if not careful.
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

export default WrappedLink;
