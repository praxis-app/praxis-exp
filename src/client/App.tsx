import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/App/Layout';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home';
import ServerInvite from './pages/Invites/ServerInvite';
import ServerInvites from './pages/Invites/ServerInvites';
import Post from './pages/Posts/Post';
import Proposal from './pages/Proposals/Proposal';
import EditUserProfile from './pages/Users/EditUserProfile';
import UserProfile from './pages/Users/UserProfile';

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
        path: '/signup/:token',
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
      {
        path: '/posts/:id',
        element: <Post />,
      },
      {
        path: '/proposals/:id',
        element: <Proposal />,
      },
      {
        path: '/users/:name',
        element: <UserProfile />,
      },
      {
        path: '/users/:name/edit',
        element: <EditUserProfile />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
