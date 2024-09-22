// Queries:
import { fetchFeaturedPackagesDetails } from '../../api/queries';

// Types, interfaces and enumns:
import type { PackageDetails } from '../../api/types/index.types';

export default async function homeLoader(): Promise<PackagesDetails[] | never> {
  const packageDetails = await fetchPackageDetails(decodedPackageName);

  return { packageDetails };
}
