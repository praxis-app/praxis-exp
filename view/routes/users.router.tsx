import { RouteObject } from 'react-router-dom';
import UserProfile from '../pages/Users/UserProfile';
import EditUserProfile from '../pages/Users/EditUserProfile';
import Followers from '../pages/Users/Followers';

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
  ],
};

export default usersRouter;
