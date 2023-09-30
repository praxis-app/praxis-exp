import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/App/Layout';
import DocsHomePage from '../components/Pages/Docs/DocsHomePage';
import Home from '../components/Pages/Home';
import ServerInvite from '../components/Pages/Invites/ServerInvite';
import ServerInvites from '../components/Pages/Invites/ServerInvites';
import authRouter from './auth.router';
import eventsRouter from './events.router';
import groupsRouter from './groups.router';
import postsRouter from './posts.router';
import proposalsRouter from './proposals.router';
import rolesRouter from './roles.router';
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
        path: 'invites',
        element: <ServerInvites />,
      },
      {
        path: 'i/:token',
        element: <ServerInvite />,
      },
      {
        path: 'docs',
        element: <DocsHomePage />,
      },
      authRouter,
      eventsRouter,
      groupsRouter,
      postsRouter,
      proposalsRouter,
      rolesRouter,
      usersRouter,
    ],
  },
]);

export default appRouter;
