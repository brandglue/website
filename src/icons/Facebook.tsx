import React, { FC } from 'react';

import { Svg } from '@components/images/Svg';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const Facebook: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="FacebookTitle"
    className={className}
    role="img"
    viewBox="0 0 40.06 40.06"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="FacebookTitle">Facebook Icon</title>
    <path
      d="M34.19 5.87A19.917 19.917 0 0 0 20.03 0C14.5 0 9.49 2.24 5.87 5.87 2.24 9.49 0 14.5 0 20.03s2.24 10.54 5.87 14.16c3.63 3.63 8.63 5.87 14.16 5.87s10.54-2.24 14.16-5.87c3.63-3.63 5.87-8.63 5.87-14.16S37.82 9.49 34.19 5.87zm-9.62 12.55l-.13 1.61h-3.03v10.23h-4.09V20.03h-2.06v-4.09h2.04V14.1c0-1.69.79-4.28 4.3-4.28h3.16v3.5h-2.3c-.38 0-.9.19-.9.98v1.64h3.25l-.24 2.48z"
      fill="#ffa700"
    />
  </Svg>
);
