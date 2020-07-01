import React, { FC, useState, useCallback } from 'react';
import { debounce } from 'lodash-es';

import { NavLink } from '@components/links/NavLink';
import { getSearchResults } from '@utils/getSearchResults';

export const Search: FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<IFlexSearchNode[]>();

  const getDebouncedSearchResults = useCallback(
    debounce((q: string) => {
      const search = getSearchResults(q);
      setResults(search);
    }, 500),
    [],
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    getDebouncedSearchResults(event.target.value);
  };

  const ResultList = () => {
    if (results && results.length > 0) {
      return (
        <div>
          {results.map((page, i) => (
            <div key={i}>
              <NavLink to={page.url}>
                <h4>{page.title}</h4>
              </NavLink>
            </div>
          ))}
        </div>
      );
    } else if (query.length > 2) {
      return <div>{'No results for ' + query}</div>;
    } else if (results?.length === 0 && query.length > 0) {
      return <div>{'Please insert at least 3 characters'}</div>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <input onChange={handleSearch} placeholder={'Search'} type="text" />
      <div className="search__list">
        <ResultList />
      </div>
    </div>
  );
};
