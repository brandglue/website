import React, { FC } from 'react';
import { Link } from '@reach/router';

import styled from '@theme/styled';

interface IOwnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export const Anchor: FC<IOwnProps> = props => (
  <StyledAnchor className={props.className} to={props.to}>
    {props.children}
  </StyledAnchor>
);

Anchor.defaultProps = {
  className: '',
};

const StyledAnchor = styled(Link)`
  display: inline-block;
  color: currentColor;
  text-decoration: none;
`;

export default Anchor;
