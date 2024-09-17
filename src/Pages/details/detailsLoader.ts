// 3rd party:
// Queries:
import { fetchPackageDetails } from '../../api/queries';

// Types, interfaces and enumns:
import type { Params } from 'react-router-dom';
import type { PackageDetails } from '../../api/types/index.types';
interface PackageDetailsLoaderArg {
  params: Params;
}
export interface DetailsLoaderReturn {
  packageDetails: PackageDetails;
}

export default async function detailsLoader({
  params,
}: PackageDetailsLoaderArg): Promise<DetailsLoaderReturn | never> {
  const { packageName } = params;

  if (!packageName) {
    throw new Error('Package name was not provided');
  }

  const packageDetails = await fetchPackageDetails(packageName);

  return { packageDetails };
}
