import React, { FC } from 'react';
import IdealImage from 'react-ideal-image';

interface IProps {
  img: IImageGroup;
}

export const Image: FC<IProps> = ({ img }) => (
  <IdealImage
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

export default Image;
