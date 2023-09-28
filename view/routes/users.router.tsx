import { RouteObject } from 'react-router-dom';
import EditUserProfile from '../pages/Users/EditUserProfile';
import Followers from '../pages/Users/Followers';
import Following from '../pages/Users/Following';
import UserProfile from '../pages/Users/UserProfile';

const usersRouter: RouteObject = {
  path: '/users',
  children: [
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
