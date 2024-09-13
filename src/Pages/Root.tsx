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
interface RootProps {}

const Root: FC<RootProps> = () => {
  // JSX:
  return (
    <div>
      <Header />
      Root
      <Outlet />
    </div>
  );
};

export default Root;
