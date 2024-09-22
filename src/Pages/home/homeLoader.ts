// Queries:
import { fetchFeaturedPackagesDetails } from '../../api/queries';

// Types, interfaces and enumns:
import type { PackageDetails } from '../../api/types/index.types';
export interface HomeLoaderReturn {
  featuredPackagesDetails: PackageDetails[];
}

export default async function homeLoader(): Promise<HomeLoaderReturn | never> {
  const featuredPackagesDetails = await fetchFeaturedPackagesDetails();

  return { featuredPackagesDetails };
}
