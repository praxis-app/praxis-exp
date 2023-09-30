import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useServerRolesQuery } from '../../../apollo/roles/generated/ServerRoles.query';
import RoleList from '../../Roles/RoleList';
import ServerRoleForm from '../../Roles/ServerRoles/ServerRoleForm';
import LevelOneHeading from '../../Shared/LevelOneHeading';
import ProgressBar from '../../Shared/ProgressBar';
import { isDeniedAccess } from '../../../utils/error.utils';

const ServerRolesIndex = () => {
  const { data, loading, error } = useServerRolesQuery();

  const roles = data?.serverRoles;
  const permissions = data?.me.serverPermissions;
  const canManageRoles = permissions?.manageRoles;

  const { t } = useTranslation();

  if (isDeniedAccess(error) || !canManageRoles) {
    return <Typography>{t('prompts.permissionDenied')}</Typography>;
  }

  if (error) {
    return <Typography>{t('errors.somethingWentWrong')}</Typography>;
  }

  if (loading) {
    return <ProgressBar />;
  }

  return (
    <>
      <LevelOneHeading header>{t('roles.headers.serverRoles')}</LevelOneHeading>

      <ServerRoleForm />
      {roles && <RoleList roles={roles} />}
    </>
  );
};

export default ServerRolesIndex;
