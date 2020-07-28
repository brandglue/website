import React, { FC } from 'react';

import { Svg } from '@components/core';

interface IOwnProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const NewsfeedOptimization: FC<IOwnProps> = ({ className = '' }) => (
  <Svg
    aria-labelledby="NewsfeedOptimizationTitle"
    className={className}
    role="img"
    viewBox="0 0 152 152"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="NewsfeedOptimizationTitle">NewsfeedOptimization Icon</title>
    <circle cx="76" cy="76" fill="#2a7de1" r="76" />
    <ellipse
      cx="76"
      cy="76.2"
      fill="#fff"
      rx="64"
      ry="64"
      transform="rotate(-45.001 76 76.202)"
    />
    <path d="M72.57 81.63h6.85v12.68h-6.85z" fill="#2a7de1" />
    <path
      d="M80.92 92.02h-9.83c-.76 0-1.38.62-1.38 1.38v31.73c0 .76.62 1.38 1.38 1.38h9.83c.76 0 1.38-.62 1.38-1.38V93.4c0-.76-.62-1.38-1.38-1.38z"
      fill="#003575"
    />
    <path d="M69.7 96.59h12.6v25.37H69.7z" fill="#ffa700" />
    <ellipse
      cx="76"
      cy="55.3"
      fill="#2a7de1"
      rx="29.41"
      ry="29.41"
      transform="rotate(-80.868 76 55.298)"
    />
    <ellipse
      cx="76"
      cy="55.3"
      fill="#fff"
      rx="24.06"
      ry="24.06"
      transform="rotate(-20.439 76.012 55.302)"
    />
    <path
      d="M93.34 57.21v-3.84l-4.17-.94c-.34-1.6-.98-3.1-1.84-4.44l2.29-3.61-2.71-2.71-3.61 2.28c-1.34-.86-2.83-1.49-4.44-1.84l-.94-4.17h-3.84l-.93 4.17c-1.61.35-3.1.98-4.44 1.84l-3.61-2.28-2.71 2.71 2.29 3.61c-.86 1.34-1.5 2.83-1.84 4.44l-4.17.94v3.84l4.17.94c.35 1.6.98 3.1 1.84 4.44l-2.29 3.61 2.71 2.71 3.61-2.29c1.34.86 2.83 1.5 4.44 1.84l.93 4.17h3.84l.94-4.17c1.61-.34 3.1-.98 4.44-1.84l3.61 2.29 2.71-2.71-2.29-3.61c.86-1.34 1.5-2.84 1.84-4.44l4.17-.94zM76 64.48a9.18 9.18 0 1 1 0-18.36 9.18 9.18 0 0 1 0 18.36z"
      fill="#ffa700"
    />
  </Svg>
);
