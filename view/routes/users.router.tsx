import { RouteObject } from 'react-router-dom';
import EditUserProfile from '../components/Pages/Users/EditUserProfile';
import Followers from '../components/Pages/Users/Followers';
import Following from '../components/Pages/Users/Following';
import UserProfile from '../components/Pages/Users/UserProfile';
import UsersIndex from '../components/Pages/Users/UsersIndex';

const usersRouter: RouteObject = {
  path: '/users',
  children: [
    {
      path: '',
      element: <UsersIndex />,
    },
    {
      path: ':name',
      element: <UserProfile />,
    },
    {
      path: ':name/edit',
      element: <EditUserProfile />,
    },
    {
      path: ':name/followers',
      element: <Followers />,
    },
    {
      path: ':name/following',
      element: <Following />,
    },
  ],
};

export default usersRouter;
