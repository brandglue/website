import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  img: IImageGroup;
}

export const Image: FC<IProps> = ({ alt, className, img, sizes }) => {
  const {
    src: { ...respImg },
  } = img;

  let fallbackSizes = '';
  if (!sizes) {
    // find width of largest image in the srcset array
    let maxImageWidth = 0;
    const imgSizes = [];
    respImg.images.forEach((img) => {
      maxImageWidth = Math.max(maxImageWidth, img.width);
      imgSizes.push(`(max-width: ${img.width}px) ${img.width}px`);
    });
    imgSizes.push(` ${maxImageWidth}px`);
    fallbackSizes = imgSizes.join(',');
  }

  return (
    <StyledImage
      alt={alt}
      className={className}
      sizes={sizes || fallbackSizes}
      src={respImg.src}
      srcSet={respImg.srcSet}
    />
  );
};

Image.defaultProps = {
  alt: '',
  className: '',
};

const StyledImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
`;

export default Image;
