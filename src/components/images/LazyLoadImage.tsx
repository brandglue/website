import React, { FC, useState } from 'react';
import styled from 'styled-components';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

interface IProps extends LazyLoadImageProps {
  img: IImageGroup;
}

export const Image: FC<IProps> = ({ alt, className, img, scrollPosition }) => {
  // TODO: Figure out the image is loading twice each time, may be due to this state
  const [previousSrc, setPreviousSrc] = useState();

  const {
    preSrc: placeholderSrc,
    src: { ...respImg },
  } = img;

  return (
    <StyledLazyLoadImage
      afterLoad={() => setPreviousSrc(img.src)}
      alt={alt}
      className={className}
      effect="opacity"
      height={respImg.height}
      placeholderSrc={placeholderSrc}
      scrollPosition={scrollPosition}
      src={respImg.src}
      srcSet={respImg.srcSet}
      visibleByDefault={img.src === previousSrc}
      width={respImg.width}
    />
  );
};

Image.defaultProps = {
  alt: '',
  className: '',
};

const StyledLazyLoadImage = styled(LazyLoadImage)`
  max-width: 100%;
`;

export default Image;
