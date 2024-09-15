// 3rd party:
// Redux RTK:
// Store:
// React Router:
import { Link } from 'react-router-dom';
// React:
// Context:
// Components:
import SearchInput from './SearchInput';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';

const Header: FC = () => {
  // JSX:
  return (
    <nav>
      <Link to='/'>NPM Registry</Link>
      <SearchInput />
    </nav>
  );
};

export default Header;
