// 3rd party:
// Utils:
import { decodePath } from '../../utils';
// Queries:
import { searchPackages } from '../../api/queries';

// Types, interfaces and enumns:
import type { PackageSummary } from '../../api/types/index.types';
interface PackageSearchLoaderArg {
  request: Request;
}
export interface SearchLoaderReturn {
  packages: PackageSummary[];
}

export default async function searchLoader({
  request,
}: PackageSearchLoaderArg): Promise<SearchLoaderReturn | never> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    throw new Error('Search term must be provided.');
  }

  // Decoding term:
  const decodedTerm = decodePath(term);

  const packages = await searchPackages(decodedTerm);

  return { packages };
}
