// 3rd party:
// Redux RTK:
// Store:
// React Router:
import { useLoaderData } from 'react-router-dom';
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { SearchLoaderReturn } from './searchLoader';
// interface SearchPageProps {}

const SearchPage: FC = () => {
  // Routing and Data:
  const { packages } = useLoaderData() as SearchLoaderReturn;

  // JSX:
  return (
    <div>{`Search results:  ${
      !packages ? 'No results' : JSON.stringify(packages)
    }`}</div>
  );
};

export default SearchPage;
