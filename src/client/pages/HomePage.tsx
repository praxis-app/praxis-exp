import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Typography textAlign="center" paddingTop={4} fontFamily="Inter Bold" fontSize={40}>
      {t('prompts.welcomeToPraxis')}
    </Typography>
  );
};

export default HomePage;
