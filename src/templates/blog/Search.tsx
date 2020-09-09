import React, { FC } from 'react';

import { SearchForm } from '@components/blog';
import { Breadcrumbs, Seo } from '@components/common';
import { Box, Divider, NavLink } from '@components/core';
import { rhythm, styled } from '@styles/index';
import { getSearchResults } from '@utils/getSearchResults';
import { RouteParts } from '@utils/routes';

interface IProps {
  location: any;
  pageContext: any;
}

export const Search: FC<IProps> = ({ location, pageContext }) => {
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
            <Result key={i}>
              <NavLink to={page.url}>{page.title}</NavLink>
            </Result>
          ))}
        </div>
      );
    } else if (query.length < 3) {
      return (
        <div>{`No results for '${query}'. Try using at least 3 characters.`}</div>
      );
    } else {
      return <div>{`No results for '${query}'.`}</div>;
    }
  };

  return (
    <>
      <Seo
        description="BrandGlue blog search"
        path={location.pathname}
        title="Blog Search"
        type="website"
      />
      <Box>
        <Divider />
        <Box variant="section">
          <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
          <SearchForm initialQuery={query} />
          <Results>
            {query && <h4>{`Search results:`}</h4>}
            <ResultList />
          </Results>
        </Box>
      </Box>
    </>
  );
};

const Results = styled(Box)`
  margin-top: ${rhythm(2)};
`;

const Result = styled(Box)`
  margin-bottom: 1em;
`;

export default Search;
