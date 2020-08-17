import React, { FC } from 'react';

import { SearchForm } from '@components/blog';
import { Breadcrumbs } from '@components/common';
import { Box, Divider, H3, NavLink } from '@components/core';
import { RouteParts } from '@constants/routes';
import { rhythm, styled } from '@styles/index';
import { getSearchResults } from '@utils/getSearchResults';

interface IProps {
  pageContext: any;
}

export const Search: FC<IProps> = ({ pageContext }) => {
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
    <Box>
      <Divider />
      <Box variant="section">
        <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
        <SearchForm initialQuery={query} />
        <Results>
          {query && <H3>{`Search results: ${query}`}</H3>}
          <div>
            {results.length > 0 ? <ResultList /> : 'Enter a search query.'}
          </div>
        </Results>
      </Box>
    </Box>
  );
};

const Results = styled(Box)`
  margin-top: ${rhythm(1)};
`;

export default Search;
