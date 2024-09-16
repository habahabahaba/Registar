// 3rd party:
// Redux RTK:
// Store:
// React Router:
import { Outlet } from 'react-router-dom';
// React:
// Context:
// Components:
import Header from '../Components/Header';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';

const Root: FC = () => {
  // JSX:
  return (
    <div className='container mx-auto lg:px-20'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
