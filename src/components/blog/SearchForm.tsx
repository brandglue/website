import { navigate } from '@reach/router';
import React, { FC, useState } from 'react';

import { Button, Input } from '@components/core';
import { styled } from '@styles/index';
import { RouteParts, TopLevelPages as Pages } from '@utils/routes';

interface IProps {
  initialQuery?: string;
}

export const SearchForm: FC<IProps> = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(
      `/${Pages.Blog}/${RouteParts.Search}?${RouteParts.QueryString}=${query}`,
    );
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} role="search">
        <Input
          mb={0}
          onChange={handleChange}
          placeholder={'Search Blog'}
          type="search"
          value={query}
        />
        <Button ml={2} type="submit" variant="primary">
          Go
        </Button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  margin: 0;
`;
