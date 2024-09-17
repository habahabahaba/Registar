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
// import type { PackageDetails } from '../../api/types/index.types';
import type { DetailsLoaderReturn } from './detailsLoader';

const DetailsPage: FC = () => {
  const { packageDetails } = useLoaderData() as DetailsLoaderReturn;

  // JSX:
  return <div>{JSON.stringify(packageDetails)}</div>;
};

export default DetailsPage;
