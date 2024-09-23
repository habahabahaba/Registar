// Queries:
import { fetchFeaturedPackagesDetails } from '../../api/queries';
// React Router:
import { defer } from 'react-router-dom';

// Types, interfaces and enumns:
import type { PackageDetails } from '../../api/types/index.types';
export interface HomeLoaderReturn {
  featuredPackagesDetails: PackageDetails[];
}

export default async function homeLoader(): DeferredData<
  Promise<HomeLoaderReturn | never>
> {
  const featuredPackagesDetails = fetchFeaturedPackagesDetails();

  return defer({ featuredPackagesDetails });
}
