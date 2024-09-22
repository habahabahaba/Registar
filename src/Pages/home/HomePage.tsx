// 3rd party:
// Utils:
import { encodePath } from '../../utils';
// Redux RTK:
// Store:
// React Router:
import { Link, useLoaderData } from 'react-router-dom';
// React:
// Context:
// Components:
// CSS:

// Types, interfaces and enumns:
import type { FC } from 'react';
import type { HomeLoaderReturn } from './homeLoader';

const HomePage: FC = () => {
  const { featuredPackagesDetails } = useLoaderData() as HomeLoaderReturn;
  // console.log(featuredPackagesDetails);

  // JSX:
  const renderedPackagesDetails = featuredPackagesDetails.map(
    ({ name, description, maintainers }) => {
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
    }
  );

  return (
    <div className='container py-12 space-y-8'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-bold'>NPM Search</h1>
        <p className='mx-auto max-w-[600px] text-gray-500'>
          Node.js packages viewer.
        </p>
      </div>
      <div className='mx-auto grid lg:grid-cols-4 grid-cols-2  items-stretch gap-4'>
        {renderedPackagesDetails}
      </div>
    </div>
  );
};

export default HomePage;
