// Types, interfaces and enumns:
import type {
  PackageSummary,
  searchPackagesResponse,
} from '../types/index.types';

const BASE_URL = 'https://registry.npmjs.org';

// Queries:
async function searchPackages(term: string): Promise<PackageSummary[] | never> {
  // Parsing the search term:

  const res = await fetch(`${BASE_URL}/-/v1/search?text=${term}`);
  const data: searchPackagesResponse = await res.json();

  if (!data.objects || !Array.isArray(data.objects)) {
    throw new Error('Search returned invalid results.');
  }

  return data.objects.map(
    ({ package: { name, description, version, keywords } }) => ({
      name,
      description,
      version,
      keywords,
    })
  );
}

export { searchPackages };
