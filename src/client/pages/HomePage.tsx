import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { usePublicGroupsFeedQuery } from '../apollo/groups/generated/PublicGroupsFeed.query';

const HomePage = () => {
  usePublicGroupsFeedQuery({
    onCompleted(data) {
      console.log('PublicGroupsFeedQuery onCompleted', data);
    },
    errorPolicy: 'all',
  });

  const { t } = useTranslation();

  return (
    <Typography textAlign="center" paddingTop={4} fontFamily="Inter Bold" fontSize={40}>
      {t('prompts.welcomeToPraxis')}
    </Typography>
  );
};

export default HomePage;
