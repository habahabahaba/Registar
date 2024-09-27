// 3rd party:
// Utils:
import { transformRepoUrl } from '../../utils';
// Redux RTK:
// Store:
// React Router:
import { useLoaderData, useLocation, Link } from 'react-router-dom';
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { DetailsLoaderReturn } from './detailsLoader';

const DetailsPage: FC = () => {
  const {
    packageDetails: {
      name,
      description,
      license,
      author,
      latest,
      maintainers = [],
      homepage = '',
      repository,
    },
  } = useLoaderData() as DetailsLoaderReturn;

  // Path to search results:
  const location = useLocation();
  const searchPath: string = location.state ? location.state.searchPath : '';

  // JSX:
  const renderedMaintainers = (
    <p>
      {maintainers.map(({ name, email }, idx) => (
        <span key={`${idx}-${name}`}>
          <a href={`mailto:${email}`}>{name}</a>
          {idx < maintainers.length - 1 ? ', ' : null}
        </span>
      ))}
    </p>
  );

  return (
    <>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold my-4'>{name}</h1>

        {latest ? (
          <h3 className='text-lg font-bold'>{`Latest version: ${latest}`}</h3>
        ) : null}
        <div>
          <h3 className='text-lg font-bold'>Description:</h3>
          <div className='p-3 bg-gray-200 rounded'>{description}</div>
        </div>
        {homepage ? (
          <div>
            <h3 className='text-lg font-bold'>Homepage:</h3>
            <div className='p-3 bg-gray-200 rounded'>
              <a href={homepage}>{homepage}</a>
            </div>
          </div>
        ) : null}
        {repository ? (
          <div>
            <h3 className='text-lg font-bold'>Repository:</h3>
            <div className='p-3 bg-gray-200 rounded'>
              <a href={transformRepoUrl(repository.url)}>
                {transformRepoUrl(repository.url)}
              </a>
            </div>
          </div>
        ) : null}
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
        {maintainers.length ? (
          <div>
            <h3 className='text-lg font-bold'>Maintainers:</h3>
            <div className='p-3 bg-gray-200 rounded'>{renderedMaintainers}</div>
          </div>
        ) : null}
      </div>
      <div className='mt-12 flex justify-end'>
        {searchPath ? (
          <Link
            to={searchPath}
            className='py-2 px-3 rounded bg-black text-white text-lg'
          >
            Back to search results
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default DetailsPage;
