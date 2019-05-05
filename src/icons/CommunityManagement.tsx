import React, { FC } from 'react';

import Svg from '@components/Svg';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const CommunityManagement: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="CommunityManagementTitle"
    className={className}
    height="152"
    role="img"
    viewBox="0 0 152 152"
    width="152"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="CommunityManagementTitle">CommunityManagement Icon</title>
    <circle cx="76" cy="76" fill="#2a7de1" r="76" />
    <circle cx="76" cy="76.5" fill="#fff" r="64" />
    <path
      d="M106.22 121.51H45.78c-1.41 0-2.55-1.14-2.55-2.55V34.04c0-1.41 1.14-2.55 2.55-2.55h60.43c1.41 0 2.55 1.14 2.55 2.55v84.92a2.533 2.533 0 0 1-2.54 2.55z"
      fill="#2a7de1"
    />
    <path d="M47.19 43.3h57.62v63.89H47.19z" fill="#fff" />
    <path
      d="M71.55 114.33c0 2.46 1.99 4.45 4.45 4.45s4.45-1.99 4.45-4.45-1.99-4.45-4.45-4.45-4.45 1.99-4.45 4.45zM85.07 36.43H72.6a1.05 1.05 0 1 0 0 2.1h12.47c.58 0 1.05-.47 1.05-1.05.01-.58-.46-1.05-1.05-1.05zM68.3 36.43h-1.37a1.05 1.05 0 1 0 0 2.1h1.37a1.05 1.05 0 1 0 0-2.1z"
      fill="#003575"
    />
    <path
      d="M116.61 50.78H81.04c-1.22 0-2.21.99-2.21 2.21v20.13c0 1.22.99 2.21 2.21 2.21h4.23v7.22l7.22-7.22h24.12c1.22 0 2.21-.99 2.21-2.21V52.99c-.01-1.22-1-2.21-2.21-2.21z"
      fill="#ffa700"
    />
    <path
      d="M79.56 51.35l17.51 13.43c1.03.79 2.46.79 3.49 0l17.51-13.43c-.39-.35-.9-.56-1.47-.56H81.04c-.57-.01-1.09.2-1.48.56z"
      fill="#f3cf89"
    />
    <g>
      <path
        d="M35.39 67.96h35.57c1.22 0 2.21.99 2.21 2.2v20.13c0 1.22-.99 2.21-2.21 2.21h-4.23v7.22l-7.22-7.22H35.39a2.21 2.21 0 0 1-2.21-2.21V70.16c.01-1.22 1-2.2 2.21-2.2z"
        fill="#003575"
      />
      <path
        d="M72.44 68.52L54.93 81.95c-1.03.79-2.46.79-3.49 0L33.92 68.52c.39-.35.9-.56 1.47-.56h35.57c.57 0 1.09.21 1.48.56z"
        fill="#2f7cc0"
      />
    </g>
  </Svg>
);

export default CommunityManagement;
