import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/App/Layout';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home';
import ServerInvite from './pages/Invites/ServerInvite';
import ServerInvites from './pages/Invites/ServerInvites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/invites',
        element: <ServerInvites />,
      },
      {
        path: '/i/:token',
        element: <ServerInvite />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
