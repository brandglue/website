import React, { FC } from 'react';
import IdealImage from 'react-ideal-image';

interface IProps {
  className?: string;
  img: IImageGroup;
}

export const Image: FC<IProps> = ({ className, img }) => (
  <IdealImage
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
  className: '',
};

export default Image;
