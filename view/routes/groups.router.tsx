import { RouteObject } from 'react-router-dom';
import EditGroup from '../pages/Groups/EditGroup';
import GroupMembers from '../pages/Groups/GroupMembers';
import GroupPage from '../pages/Groups/GroupPage';
import GroupSettings from '../pages/Groups/GroupSettings';

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
    {
      path: ':name/settings',
      element: <GroupSettings />,
    },
    {
      path: ':name/members',
      element: <GroupMembers />,
    },
  ],
};

export default groupsRouter;
