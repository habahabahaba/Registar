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
export interface PackageDetails {
  name: string;
  description: string;
  readme: string;
  author: {
    name: string;
    email: string;
  };
  maintainers: {
    name: string;
    email: string;
  }[];
  license: string;
  latest: string;
  homepage?: string;
  repository?: {
    type?: string;
    url: string;
  };
}
