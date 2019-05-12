import React, { FC } from 'react';
import { Link } from '@reach/router';

import styled from '@theme/styled';

interface IOwnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export const Anchor: FC<IOwnProps> = props => (
  <StyledAnchor to={props.to}>{props.children}</StyledAnchor>
);

const StyledAnchor = styled(Link)`
  color: currentColor;
  text-decoration: none;
`;

export default Anchor;
