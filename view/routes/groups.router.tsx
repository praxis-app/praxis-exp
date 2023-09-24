import { RouteObject } from 'react-router-dom';
import EditGroup from '../pages/Groups/EditGroup';
import GroupMemberRequests from '../pages/Groups/GroupMemberRequests';
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
    {
      path: ':name/requests',
      element: <GroupMemberRequests />,
    },
  ],
};

export default groupsRouter;
