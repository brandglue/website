/*
  Typescript struggles with image file imports because it doesn't know how to process the extension.
  To work around this, you need to define a module for each relevant extension.
  This allows the compiler to properly process that extension type.
  Under the hood, this module assumes the presence of Webpack to eventually
  properly apply a file-loader or whatnot to the file.

  See: https://stackoverflow.com/a/36151803
*/
declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.webp' {
  const value: any;
  export default value;
}
