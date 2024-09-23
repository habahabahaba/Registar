// Queries:
import { fetchFeaturedPackagesDetails } from '../../api/queries';
// React Router:
import { defer } from 'react-router-dom';

// Types, interfaces and enumns:
import type { PackageDetails } from '../../api/types/index.types';
export interface HomeLoaderReturn {
  featuredPackagesDetails: PackageDetails[] | Promise<PackageDetails[]>;
}

export default async function homeLoader(): Promise<ReturnType<typeof defer>> {
  const featuredPackagesDetails = fetchFeaturedPackagesDetails();

  return defer({ featuredPackagesDetails });
}
