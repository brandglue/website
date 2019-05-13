import React, { FC } from 'react';

import Svg from '@components/images/Svg';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const PaidAdvertising: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="PaidAdvertisingTitle"
    className={className}
    role="img"
    viewBox="0 0 152 152"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="PaidAdvertisingTitle">PaidAdvertising Icon</title>
    <circle cx="76" cy="76" fill="#2a7de1" r="76" />
    <circle cx="76" cy="76.51" fill="#fff" r="64" />
    <path
      d="M105.48 120.43H46.52a2.49 2.49 0 0 1-2.49-2.49V35.09a2.49 2.49 0 0 1 2.49-2.49h58.96a2.49 2.49 0 0 1 2.49 2.49v82.85c0 1.37-1.12 2.49-2.49 2.49z"
      fill="#2a7de1"
    />
    <path d="M47.89 44.12h56.21v62.33H47.89z" fill="#828487" />
    <circle cx="76" cy="113.41" fill="#003575" r="4.34" />
    <path
      d="M84.85 37.42H72.69c-.57 0-1.03.46-1.03 1.03 0 .57.46 1.03 1.03 1.03h12.17c.57 0 1.03-.46 1.03-1.03-.01-.57-.47-1.03-1.04-1.03zM68.49 37.42h-1.34c-.57 0-1.03.46-1.03 1.03 0 .57.46 1.03 1.03 1.03h1.34c.57 0 1.03-.46 1.03-1.03 0-.57-.46-1.03-1.03-1.03z"
      fill="#003575"
    />
    <path d="M55.04 51.15v39.06h8.83v8.82h33.09V51.15z" fill="#fff" />
    <path d="M55.04 90.21l8.83 8.82v-8.82z" fill="#dde0e5" />
    <path
      d="M73.46 81.36l-1.13-2.62h-5.09l-1.13 2.62h-2.88l5.25-12.14h2.62l5.25 12.14h-2.89zm-3.66-8.53l-1.53 3.53h3.04l-1.51-3.53zM87.03 70.81c1.16 1.06 1.74 2.53 1.74 4.42 0 1.89-.56 3.38-1.69 4.48-1.13 1.1-2.85 1.65-5.17 1.65h-4.15V69.22h4.29c2.16 0 3.82.53 4.98 1.59zm-1.99 7.21c.67-.63 1-1.53 1-2.73 0-1.19-.33-2.11-1-2.75-.67-.64-1.69-.96-3.07-.96h-1.51v7.38h1.72c1.24 0 2.2-.31 2.86-.94z"
      fill="#ffa700"
    />
  </Svg>
);

export default PaidAdvertising;
