import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../../../apollo/cache';
import GroupsList from '../../Groups/GroupsList';
import PublicGroupsList from '../../Groups/PublicGroupsList';

const GroupsIndex = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  if (!isLoggedIn) {
    return <PublicGroupsList />;
  }
  return <GroupsList />;
};

export default GroupsIndex;
