import { RouteObject } from 'react-router-dom';
import EditGroup from '../pages/Groups/EditGroup';
import GroupPage from '../pages/Groups/GroupPage';

const groupsRouter: RouteObject = {
  path: '/groups',
  children: [
    {
      path: ':name',
      element: <GroupPage />,
    },
    {
      path: ':name/edit',
      element: <EditGroup />,
    },
  ],
};

export default groupsRouter;
