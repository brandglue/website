import React, { FC } from 'react';

import { Svg } from '@components/core';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const CustomerService: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="CustomerServiceTitle"
    className={className}
    role="img"
    viewBox="0 0 152 152"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="CustomerServiceTitle">CustomerService Icon</title>
    <circle cx="76" cy="76" fill="#2a7de1" r="76" />
    <circle cx="76" cy="76" fill="#003575" r="64" />
    <path
      d="M69.3 69h42.92a2.87 2.87 0 0 1 2.87 2.87v27.96a2.87 2.87 0 0 1-2.87 2.87h-4.33v9.83l-9.83-9.83H69.3a2.87 2.87 0 0 1-2.87-2.87V71.87c0-1.59 1.28-2.87 2.87-2.87z"
      fill="#ffa700"
    />
    <path
      d="M98.78 39.47h-58c-2.14 0-3.88 1.74-3.88 3.88v37.78c0 2.14 1.74 3.88 3.88 3.88h5.86v13.28l13.28-13.28h38.86c2.14 0 3.88-1.74 3.88-3.88V43.35c0-2.14-1.73-3.88-3.88-3.88z"
      fill="#fff"
    />
    <path
      d="M43.95 47.16h51.68v2.76H43.95zM43.95 56.31h51.68v2.76H43.95zM43.95 65.47h51.68v2.76H43.95zM43.95 74.62h31.2v2.76h-31.2z"
      fill="#828487"
    />
  </Svg>
);
