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
import type { DetailsLoaderReturn } from './detailsLoader';

const DetailsPage: FC = () => {
  // console.log(useLoaderData());
  const {
    packageDetails: { name, description, license, author, latest },
  } = useLoaderData() as DetailsLoaderReturn;

  // JSX:
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold my-4'>{name}</h1>

      {latest ? (
        <h3 className='text-lg font-bold'>{`Latest version: ${latest}`}</h3>
      ) : null}

      <div>
        <h3 className='text-lg font-bold'>Description:</h3>
        <div className='p-3 bg-gray-200 rounded'>{description}</div>
      </div>
      {license ? (
        <div>
          <h3 className='text-lg font-bold'>License:</h3>
          <div className='p-3 bg-gray-200 rounded'>{license}</div>
        </div>
      ) : null}
      {author ? (
        <div>
          <h3 className='text-lg font-bold'>Author:</h3>
          <div className='p-3 bg-gray-200 rounded'>{author.name}</div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailsPage;
