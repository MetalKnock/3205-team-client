import { RouterProvider } from 'react-router-dom';
import { router } from 'src/pages';

export default function App() {
  return <RouterProvider router={router} />;
}
