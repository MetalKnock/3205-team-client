import { RouterProvider } from 'react-router-dom';
import { router } from 'src/pages';
import 'react-toastify/dist/ReactToastify.css';
import 'src/styles/index.scss';

export default function App() {
  return <RouterProvider router={router} />;
}
