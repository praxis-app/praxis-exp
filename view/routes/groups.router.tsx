import { RouteObject } from 'react-router-dom';
import GroupPage from '../pages/Groups/GroupPage';

const groupsRouter: RouteObject = {
  path: '/groups',
  children: [
    {
      path: ':name',
      element: <GroupPage />,
    },
  ],
};

export default groupsRouter;
