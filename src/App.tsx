// 3rd party:
// Redux RTK:
// Store:
// React Router:
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// React:
// Context:
// Pages:
import Root from './Pages/Root';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import DetailsPage from './Pages/DetailsPage';
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
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  // JSX:
  return <RouterProvider router={router} />;
}

export default App;
