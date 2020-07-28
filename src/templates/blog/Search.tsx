import React, { FC } from 'react';

import { Box, H3, NavLink } from '@components/core';
import { Hero, SearchForm } from '@components/blog';
import { RouteParts } from '@constants/routes';
import { getSearchResults } from '@utils/getSearchResults';

export const Search: FC = () => {
  let query = '';

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search.slice(1));
    query = params.get(RouteParts.QueryString) || '';
  }

  const results = query ? getSearchResults(query) : [];

  const ResultList = () => {
    if (results.length > 0) {
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
      return <div>{`No results for '${query}'`}</div>;
    } else if (results?.length === 0 && query.length > 0) {
      return <div>{'Please insert at least 3 characters'}</div>;
    } else {
      return null;
    }
  };

  return (
    <>
      <Hero />
      <Box>
        <Box py={6} variant="section">
          <SearchForm initialQuery={query} />
          {query && <H3>{`Search results: ${query}`}</H3>}
          <div>
            {results.length > 0 ? <ResultList /> : 'Enter a search query.'}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Search;
