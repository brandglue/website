import React, { FC } from 'react';

import { Svg } from '@components/images/Svg';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const ContentStrategy: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="ContentStrategyTitle"
    className={className}
    role="img"
    viewBox="0 0 152 152"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="ContentStrategyTitle">ContentStrategy Icon</title>
    <circle cx="76" cy="76" fill="#2a7de1" r="76" />
    <circle cx="75.74" cy="76.5" fill="#828487" r="64" />
    <path
      d="M36.87 50.78h53.41v4.18H36.87zM36.87 62.6h22.58v4.18H36.87zM36.87 74.41h39.16v4.18H36.87zM36.87 86.23h58.11v4.18H36.87zM36.87 98.04h24.04v4.18H36.87zM93.2 50.78H111v4.18H93.2zM62.37 62.6h48.64v4.18H62.37zM78.95 74.41h32.06v4.18H78.95zM97.9 86.23h13.11v4.18H97.9z"
      fill="#fff"
    />
    <g>
      <path
        d="M70 79.02h43.77v23.24H70z"
        fill="#ffa700"
        transform="rotate(-45.001 91.873 90.638)"
      />
      <path
        d="M70 85.54h43.77v10.19H70z"
        fill="#ffd186"
        transform="rotate(-45.001 91.873 90.638)"
      />
      <path d="M68.19 97.9l-6.91 23.33 23.34-6.9z" fill="#ffc75b" />
      <path d="M63.93 112.28l-2.65 8.95 8.96-2.64z" fill="#324a5e" />
      <path
        d="M110.37 60.59l11.56 11.56a3.446 3.446 0 0 1 0 4.88l-6.36 6.36-16.43-16.44 6.36-6.36a3.434 3.434 0 0 1 4.87 0z"
        fill="#ff7058"
      />
      <path
        d="M99.1 66.96h9.67V90.2H99.1z"
        fill="#fff"
        transform="rotate(-45.001 103.928 78.584)"
      />
    </g>
  </Svg>
);

export default ContentStrategy;
