import React, { FC } from 'react';

import BrandGlueIconLogoOnly from '@icons/BrandglueLogoIconOnly';
import styled, { keyframes } from '@theme/styled';

export const Spinner: FC<React.HTMLAttributes<SVGAElement>> = props => (
  <AnimatedLogo className={props.className} />
);

Spinner.defaultProps = {
  className: '',
};

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AnimatedLogo = styled(BrandGlueIconLogoOnly)`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  animation: ${rotate360} 1.5s linear infinite;
  color: ${({ theme }) => theme.Colors.Gray02};
`;

export default Spinner;
