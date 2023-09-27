import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/App/Layout';
import Login from '../pages/Auth/Login';
import Home from '../pages/Home';
import ServerInvite from '../pages/Invites/ServerInvite';
import ServerInvites from '../pages/Invites/ServerInvites';
import Post from '../pages/Posts/Post';
import Proposal from '../pages/Proposals/Proposal';
import eventsRouter from './events.router';
import groupsRouter from './groups.router';
import rolesRouter from './roles.router';
import signUpRouter from './sign-up.router';
import usersRouter from './users.router';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'invites',
        element: <ServerInvites />,
      },
      {
        path: 'i/:token',
        element: <ServerInvite />,
      },
      {
        path: 'posts/:id',
        element: <Post />,
      },
      {
        path: 'proposals/:id',
        element: <Proposal />,
      },
      eventsRouter,
      groupsRouter,
      rolesRouter,
      signUpRouter,
      usersRouter,
    ],
  },
]);

export default appRouter;
