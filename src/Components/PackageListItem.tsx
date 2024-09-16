// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { PackageSummary } from '../api/types/index.types';
interface PackageListItemProps {
  packageSummary: PackageSummary;
}

const PackageListItem: FC<PackageListItemProps> = ({ packageSummary }) => {
  // JSX:
  return (
    <div>
      {JSON.stringify(packageSummary)}
      <hr />
    </div>
  );
};

export default PackageListItem;
