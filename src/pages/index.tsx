import { createBrowserRouter } from 'react-router-dom';
import { RoutePath } from 'src/constants/common';
import { Layout } from 'src/layout';
import { Main } from './Main';
import { NotFound } from './NotFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: RoutePath.main,
        element: <Main />,
      },
      {
        path: RoutePath.notFound,
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
