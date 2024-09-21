// 3rd party:
// Utils:
import { decodePath } from '../../utils';
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

  // Decoding packageName:
  const decodedPackageName = decodePath(packageName);

  const packageDetails = await fetchPackageDetails(decodedPackageName);

  return { packageDetails };
}
