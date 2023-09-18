import { useReactiveVar } from '@apollo/client';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { inviteTokenVar, isLoggedInVar } from '../../apollo/cache';
import { useServerInviteQuery } from '../../apollo/invites/generated/ServerInvite.query';
import { useIsFirstUserQuery } from '../../apollo/users/generated/IsFirstUser.query';
import SignUpForm from '../../components/Auth/SignUpForm';
import ProgressBar from '../../components/Shared/ProgressBar';
import { NavigationPaths } from '../../constants/shared.constants';
import { INVITE_TOKEN } from '../../constants/server-invite.constants';
import { redirectTo, setLocalStorageItem } from '../../utils/shared.utils';

const SignUp = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { t } = useTranslation();

  // TODO: Parse query for token
  const token = ''; // String(query?.token || '');

  const { loading: serverInviteLoading, error: serverInviteError } = useServerInviteQuery({
    onCompleted({ serverInvite }) {
      inviteTokenVar(serverInvite.token);
      setLocalStorageItem(INVITE_TOKEN, serverInvite.token);
    },
    variables: { token },
    skip: isLoggedIn || !token,
  });

  const {
    data,
    loading: userCountLoading,
    error: userCountError,
  } = useIsFirstUserQuery({ skip: isLoggedIn });

  useEffect(() => {
    if (isLoggedIn) {
      redirectTo(NavigationPaths.Home);
    }
  }, [isLoggedIn]);

  if (serverInviteError) {
    return <Typography>{t('invites.prompts.expiredOrInvalid')}</Typography>;
  }
  if (userCountError) {
    return <Typography>{t('errors.somethingWentWrong')}</Typography>;
  }
  if (serverInviteLoading || userCountLoading || isLoggedIn) {
    return <ProgressBar />;
  }
  if (!token && !data?.isFirstUser) {
    return <Typography>{t('invites.prompts.inviteRequired')}</Typography>;
  }

  return <SignUpForm />;
};

export default SignUp;
