import React, { FC } from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';

interface IProps extends LazyLoadImageProps {
  img: IImageGroup;
}

export const Image: FC<IProps> = ({ alt, className, img, scrollPosition }) => {
  const {
    preSrc,
    src: { ...respImg },
  } = img;
  const imageClassName = cx(className);

  return (
    <StyledLazyLoadImage
      alt={alt}
      className={imageClassName}
      placeholderSrc={preSrc}
      scrollPosition={scrollPosition}
      src={respImg.src}
      srcSet={respImg.srcSet}
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
