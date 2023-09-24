import { RouteObject } from 'react-router-dom';
import UserProfile from '../pages/Users/UserProfile';
import EditUserProfile from '../pages/Users/EditUserProfile';

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
  ],
};

export default usersRouter;
