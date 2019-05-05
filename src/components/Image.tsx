import React, { FC } from 'react';
import IdealImage from 'react-ideal-image';

interface IProps {
  alt: string;
  className?: string;
  img: IImageGroup;
}

export const Image: FC<IProps> = ({ alt, className, img }) => (
  <IdealImage
    alt={alt}
    className={className}
    height={img.src.height}
    placeholder={{ lqip: img.preSrc }}
    src={img.src.src}
    srcSet={img.src.images.map(image => ({
      ...image,
      src: image.path,
    }))}
    width={img.src.width}
  />
);

Image.defaultProps = {
  alt: '',
  className: '',
};

export default Image;
