// 3rd party:
// Redux RTK:
// Store:
// React Router:
import { useLoaderData } from 'react-router-dom';
// React:
// Context:
// Components:
import PackageListItem from '../../Components/PackageListItem';
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
    <div>
      {packages.map((pack) => (
        <PackageListItem packageSummary={pack} key={pack.description} />
      ))}
    </div>
  );
};

export default SearchPage;
