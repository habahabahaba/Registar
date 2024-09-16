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
  const renderedPackages = packages.map((pack) => (
    <PackageListItem packageSummary={pack} key={pack.name} />
  ));

  return (
    <div>
      <h1 className='text-2xl font-bold my-6'>Search Results:</h1>
      <div className='space-y-4 mt-4'>{renderedPackages}</div>
    </div>
  );
};

export default SearchPage;
