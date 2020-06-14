import React, { FC } from 'react';

import { Svg } from '@components/images/Svg';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const LinkedIn: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="LinkedInTitle"
    className={className}
    role="img"
    viewBox="0 0 40.06 40.06"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="LinkedInTitle">LinkedIn Icon</title>
    <path
      d="M34.19 5.87A19.958 19.958 0 0 0 20.03 0C14.5 0 9.49 2.25 5.87 5.87A19.94 19.94 0 0 0 0 20.04c0 5.52 2.24 10.53 5.87 14.16 3.63 3.62 8.63 5.87 14.16 5.87 5.53 0 10.54-2.25 14.16-5.87 3.63-3.62 5.87-8.64 5.87-14.16 0-5.54-2.24-10.55-5.87-14.17zM14.86 28.02h-3.95V15.9h3.95v12.12zm-1.95-13.77c-1.27 0-2.29-.93-2.3-2.1-.02-1.27.95-2.14 2.35-2.12 1.31.01 2.25.9 2.24 2.12-.01 1.18-1.01 2.1-2.29 2.1zm16.47 13.78h-3.94c0-1.65.01-3.24 0-4.84 0-.75 0-1.5-.06-2.24-.11-1.4-.82-2.15-1.95-2.15-1.25.01-2.15.96-2.17 2.36-.03 1.98-.01 3.96-.01 5.94v.88h-4.04V15.92h3.98c.03.41.07.8.08.95 1.09-.41 2.19-1.1 3.34-1.2 2.64-.24 4.49 1.19 4.72 3.82.24 2.78.05 5.59.05 8.54z"
      fill="#ffa700"
    />
  </Svg>
);

export default LinkedIn;
