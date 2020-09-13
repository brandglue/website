/*
  Typescript struggles with media file imports because it doesn't know how to process the extension.
  To work around this, you need to define a module for each relevant extension.
  This allows the compiler to properly process that extension type.
  Under the hood, this module assumes the presence of Webpack to eventually
  properly apply a file-loader or whatnot to the file.
  See: https://stackoverflow.com/a/36151803
*/

declare module '*.gif' {
  const value: unknown;
  export default value;
}

declare module '*.jpg' {
  const value: unknown;
  export default value;
}

declare module '*.jpeg' {
  const value: unknown;
  export default value;
}

declare module '*.png' {
  const value: unknown;
  export default value;
}

declare module '*.webp' {
  const value: unknown;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Window {
  __FLEXSEARCH__: IFlexSearch;
}

interface IFlexSearch {
  [key: string]: {
    index: IFlexSearchIndexResult[];
    store: IFlexSearchNodeResult[];
  };
}
interface IFlexSearchIndexResult {
  name: string;
  attrs: Record<string, unknown>;
  values: {
    search: (query: string) => string[];
  };
}

interface IFlexSearchNodeResult {
  id: string;
  node: IFlexSearchNode;
}

interface IFlexSearchNode {
  title: string;
  url: string;
}

interface IBreadcrumb {
  crumbs: ICrumb[];
  location: string;
}

interface ICrumb {
  crumbLabel: string;
  pathname: string;
}

/*
  Declare modules below for 3rd-party packages that have no current type definition
*/
declare module 'compass-vertical-rhythm';
declare module 'gray-percentage';
declare module 'react-typography';
declare module 'gatsby-plugin-breadcrumb';
