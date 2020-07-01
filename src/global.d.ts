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

/*
  Declare modules below for 3rd-party packages that have no current type definition
*/
declare module 'fluid-system';
