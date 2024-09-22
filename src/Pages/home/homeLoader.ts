// Queries:
import { fetchFeaturedPackages } from '../../api/queries';

export default async function homeLoader({
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
