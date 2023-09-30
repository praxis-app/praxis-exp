import { RouteObject } from 'react-router-dom';
import EditGroup from '../components/Pages/Groups/EditGroup';
import EditGroupRole from '../components/Pages/Groups/EditGroupRole';
import GroupMemberRequests from '../components/Pages/Groups/GroupMemberRequests';
import GroupMembers from '../components/Pages/Groups/GroupMembers';
import GroupPage from '../components/Pages/Groups/GroupPage';
import GroupRoles from '../components/Pages/Groups/GroupRoles';
import GroupSettings from '../components/Pages/Groups/GroupSettings';
import GroupsIndex from '../components/Pages/Groups/GroupsIndex';

const groupsRouter: RouteObject = {
  path: '/groups',
  children: [
    {
      path: '',
      element: <GroupsIndex />,
    },
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
    {
      path: ':name/roles',
      element: <GroupRoles />,
    },
    {
      path: ':name/roles/:id/edit',
      element: <EditGroupRole />,
    },
  ],
};

export default groupsRouter;
