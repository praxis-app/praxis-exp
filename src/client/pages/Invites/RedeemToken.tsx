import { useReactiveVar } from '@apollo/client';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { inviteTokenVar, isLoggedInVar } from '../../apollo/cache';
import { useServerInviteQuery } from '../../apollo/invites/generated/ServerInvite.query';
import PublicGroupsFeed from '../../components/Groups/PublicGroupsFeed';
import ProgressBar from '../../components/Shared/ProgressBar';
import { INVITE_TOKEN } from '../../constants/server-invite.constants';
import { NavigationPaths } from '../../constants/shared.constants';
import { setLocalStorageItem } from '../../utils/shared.utils';

const ServerInvitePage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const [searchParams] = useSearchParams();

  const token = String(searchParams.get('token') || '');
  const { loading, error } = useServerInviteQuery({
    onCompleted({ serverInvite }) {
      inviteTokenVar(serverInvite.token);
      setLocalStorageItem(INVITE_TOKEN, serverInvite.token);
    },
    variables: { token },
    skip: isLoggedIn || !token,
  });

  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(NavigationPaths.Home);
    }
  }, [isLoggedIn]);

  if (!token) {
    return <Typography>{t('invites.prompts.inviteRequired')}</Typography>;
  }
  if (error) {
    return <Typography>{t('invites.prompts.expiredOrInvalid')}</Typography>;
  }
  if (loading || isLoggedIn) {
    return <ProgressBar />;
  }

  return <PublicGroupsFeed />;
};

export default ServerInvitePage;
