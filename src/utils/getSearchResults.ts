export function getSearchResults(query: string) {
  const index = window?.__FLEXSEARCH__?.en?.index;
  const store = window?.__FLEXSEARCH__?.en?.store;

  if (index && store) {
    const matches: string[] = [];

    // search the indexed fields
    index.forEach((entry) => matches.push(...entry.values.search(query)));

    // find the unique ids of the nodes
    const ids = Array.from(new Set(matches));

    // return the corresponding nodes in the store
    const nodes = store
      .filter((node) => (ids.includes(node.id) ? node : null))
      .map((node) => node.node);

    return nodes;
  }

  return [];
}
