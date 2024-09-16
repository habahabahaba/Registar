// 3rd party:
// Queries:
import { searchPackages } from '../../api/queries';

// Types, interfaces and enumns:
import type { PackageSummary } from '../../api/types/index.types';
interface PackageSearchParams {
  request: Request;
}
export interface SearchLoaderReturn {
  packages: PackageSummary[];
}

export default async function searchLoader({
  request,
}: PackageSearchParams): Promise<SearchLoaderReturn | never> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    throw new Error('Search term must be provided.');
  }

  const packages = await searchPackages(term);

  return { packages };
}
