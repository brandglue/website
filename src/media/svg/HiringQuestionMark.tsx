import React, { FC } from 'react';

import { Svg } from '@components/core';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const HiringQuestionMark: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="hiringQuestionMark"
    className={className}
    role="img"
    viewBox="0 0 298.58 370.43"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path d="M0 0h298.58v370.43H0z" fill="#828487" />
    </defs>
    <path d="M137.56 370.43l161.02-161.02v161.02z" fill="#ffad00" />
    <g>
      <text transform="translate(222.032 330.344)">
        <tspan fill="#fff" fontSize="22" x="0" y="0">
          We’re
        </tspan>
        <tspan fill="#fff" fontSize="22" x="-15.47" y="24">
          Hiring!
        </tspan>
      </text>
    </g>
    <g>
      <text
        fill="#666"
        fontSize="321.038"
        transform="translate(73.032 296.316)"
      >
        ?
      </text>
    </g>
  </Svg>
);
