// 3rd party:
// Redux RTK:
// Store:
// React Router:
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Loaders:
import searchLoader from './Pages/search/searchLoader';
import detailsLoader from './Pages/details/detailsLoader';
import homeLoader from './Pages/home/homeLoader';
// React:
// Context:
// Pages:
import Root from './Pages/Root';
import HomePage from './Pages/home/HomePage';
import SearchPage from './Pages/search/SearchPage';
import DetailsPage from './Pages/details/DetailsPage';
// Components:
// CSS:
// Types, interfaces and enumns:

// Routing:
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: '/packages/:packageName',
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  // JSX:
  return <RouterProvider router={router} />;
}

export default App;
