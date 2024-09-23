// 3rd party:
// Utils:
import { encodePath } from '../utils';
// Redux RTK:
// Store:
// React Router:
// Navigation:
import { Link } from 'react-router-dom';
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { PackageDetails } from '../api/types/index.types';
interface FeaturedPackagesProps {
  featuredPackages: PackageDetails[];
}

const FeaturedPackages: FC<FeaturedPackagesProps> = ({ featuredPackages }) => {
  // JSX:
  return featuredPackages.map(({ name, description, maintainers }) => {
    // Removing possible slashes from package name:
    const encodedName = encodePath(name);

    return (
      <div
        key={name}
        className='flex flex-col justify-between gap-3 border rounded shadow p-4 min-h-60'
      >
        <div className='flex flex-col h-full justify-between gap-1 border-b border-gray-400'>
          <div className='font-bold text-center'>{name}</div>

          <div className='text-sm text-gray-500'>{description}</div>
          {maintainers && maintainers.length ? (
            <div className='text-sm text-gray-500 justify-self-end'>{`Maintainers: ${maintainers.length}`}</div>
          ) : null}
        </div>
        <Link
          to={`/packages/${encodedName}`}
          className='py-2 px-6 rounded bg-black text-white text-center w-min mx-auto'
        >
          View
        </Link>
      </div>
    );
  });
};

export default FeaturedPackages;
