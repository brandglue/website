import React, { FC, useState } from 'react';
import styled from 'styled-components';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

interface IProps extends LazyLoadImageProps {
  img: IImageGroup;
}

export const Image: FC<IProps> = ({ alt, className, img, scrollPosition }) => {
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
      effect="black-and-white"
      placeholderSrc={placeholderSrc}
      scrollPosition={scrollPosition}
      src={respImg.src}
      srcSet={respImg.srcSet}
      visibleByDefault={img.src === previousSrc}
    />
  );
};

Image.defaultProps = {
  alt: '',
  className: undefined,
};

const StyledLazyLoadImage = styled(LazyLoadImage)`
  max-width: 100%;
`;

export default Image;
