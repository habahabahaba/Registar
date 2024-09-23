// 3rd party:
// Redux RTK:
// Store:
// React Router:
import { useLoaderData, Await } from 'react-router-dom';
// React:
import { Suspense } from 'react';
// Context:
// Components:
import FeaturedPackages from '../../Components/FeaturedPackages';
// CSS:

// Types, interfaces and enumns:
import type { FC } from 'react';
import type { HomeLoaderReturn } from './homeLoader';

const HomePage: FC = () => {
  const { featuredPackagesDetails } = useLoaderData() as HomeLoaderReturn;
  // console.log(featuredPackagesDetails);

  // JSX:
  const featuredPackagesFallback = (
    <div className='flex justify-center text-center  mt-8'>
      <span className='text-2xl  text-gray-500 '>
        Loading featured packages...
      </span>
    </div>
  );

  const renderedFeaturedPackages = (
    <Suspense fallback={featuredPackagesFallback}>
      <Await
        resolve={featuredPackagesDetails}
        errorElement={<p>Error loading packages!</p>}
      >
        {(featuredPackagesDetails) => (
          <FeaturedPackages featuredPackages={featuredPackagesDetails} />
        )}
      </Await>
    </Suspense>
  );

  return (
    <div className='container py-12 space-y-8'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-bold'>Node packages Search</h1>
        <p className='mx-auto max-w-[600px] text-gray-500'>
          Node.js packages viewer. Use search-field at the top to search
          packages by name.
        </p>
      </div>
      {renderedFeaturedPackages}
    </div>
  );
};

export default HomePage;
