import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/App/Layout';
import Login from './pages/Auth/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => (
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);

export default App;
