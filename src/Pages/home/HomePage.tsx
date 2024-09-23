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
  const renderedPackagesDetails = (
    <Suspense fallback={<p>Top packages ...</p>}>
      <Await
        resolve={featuredPackagesDetails}
        errorElement={<p>Error loading package location!</p>}
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
