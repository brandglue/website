/*
  Typescript struggles with image file imports because it doesn't know how to process the extension.
  To work around this, you need to define a module for each relevant extension.
  This allows the compiler to properly process that extension type.
  Under the hood, this module assumes the presence of Webpack to eventually
  properly apply a file-loader or whatnot to the file.

  See: https://stackoverflow.com/a/36151803
*/

// these image interface is based on the return type of the image loaders in the node.api.js
// if those loaders are changed, this interface will also likely need to change
interface IImage {
  height: number;
  path: string;
  width: number;
}

interface IImageGroup {
  preSrc: string;
  src: {
    height: number;
    images: IImage[];
    placeholder: string;
    src: string;
    srcSet: string;
    width: number;
  };
}

declare module '*.gif' {
  const value: IImageGroup;
  export default value;
}

declare module '*.jpg' {
  const value: IImageGroup;
  export default value;
}

declare module '*.jpeg' {
  const value: IImageGroup;
  export default value;
}

declare module '*.png' {
  const value: IImageGroup;
  export default value;
}

declare module '*.webp' {
  const value: unknown;
  export default value;
}

/*
  Declare modules below for 3rd-party packages that have no current type definition
*/
declare module 'react-ideal-image';
declare module 'responsive-loader/sharp';
declare module 'fluid-system';
