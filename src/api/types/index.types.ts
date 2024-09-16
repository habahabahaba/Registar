// Types, interfaces and enumns:
export interface PackageResult {
  package: {
    name: string;
    description: string;
    version: string;
    keywords?: string[];
  };
  searchScore: number;
}
export type PackageSummary = PackageResult['package'];
export interface searchPackagesResponse {
  objects: PackageResult[];
  total: number;
}
