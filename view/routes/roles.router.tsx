import { RouteObject } from 'react-router-dom';
import EditServerRole from '../components/Pages/Roles/EditServerRole';
import ServerRolesIndex from '../components/Pages/Roles/ServerRolesIndex';

const rolesRouter: RouteObject = {
  path: '/roles',
  children: [
    {
      path: '',
      element: <ServerRolesIndex />,
    },
    {
      path: ':id/edit',
      element: <EditServerRole />,
    },
  ],
};

export default rolesRouter;
