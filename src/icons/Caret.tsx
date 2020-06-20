import React, { FC } from 'react';

import { Svg } from '@components/images/Svg';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
  shouldRotate?: boolean;
}

export const Caret: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="caretTitle"
    className={className}
    role="img"
    viewBox="0 0 13 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="caretTitle">Caret</title>
    <polygon id="Shape" points="0 6.24 6.24 0 12.49 6.24" />
  </Svg>
);
