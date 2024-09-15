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
    <nav className='flex items-center justify-between px-4 border-b h-14'>
      <div className='flex items-center space-x-2 '>
        <Link to='/' className='text-lg font-bold'>
          NPM Registry
        </Link>
      </div>
      <div className='w-full max-w-xl ml-4'>
        <SearchInput />
      </div>
    </nav>
  );
};

export default Header;
