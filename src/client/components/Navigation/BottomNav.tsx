import { useReactiveVar } from '@apollo/client';
import { EventNote, Group, Home, Menu } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper, SxProps } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isNavDrawerOpenVar } from '../../apollo/cache';

const PAPER_STYLES: SxProps = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 5,
};

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const isNavDrawerOpen = useReactiveVar(isNavDrawerOpenVar);

  const { t } = useTranslation();

  // TODO: Add bottom nav functionality
  // useEffect(() => {
  //   if (!isNavDrawerOpen) {
  //     const getMatching = (path: string): string => {
  //       const match = asPath.match(path);
  //       if (match) {
  //         return asPath;
  //       }
  //       return '';
  //     };

  //     switch (asPath) {
  //       case NavigationPaths.Home:
  //         setValue(0);
  //         break;
  //       case getMatching('groups'):
  //       case NavigationPaths.Groups:
  //         setValue(2);
  //         break;
  //       case getMatching('events'):
  //       case NavigationPaths.Events:
  //         setValue(1);
  //         break;
  //       default:
  //         setValue(3);
  //     }
  //   }
  // }, [asPath, isNavDrawerOpen]);

  // const handleHomeButtonClick = () => {
  //   if (asPath === NavigationPaths.Home) {
  //     scrollTop();
  //   } else {
  //     Router.push(NavigationPaths.Home);
  //   }
  // };

  const handleNavChange = (_: SyntheticEvent<Element, Event>, newValue: number) =>
    setValue(newValue);

  return (
    <Paper sx={PAPER_STYLES}>
      <BottomNavigation onChange={handleNavChange} role="navigation" showLabels value={value}>
        <BottomNavigationAction icon={<Home />} label={t('navigation.home')} />

        <BottomNavigationAction icon={<EventNote />} label={t('navigation.events')} />

        <BottomNavigationAction icon={<Group />} label={t('navigation.groups')} />

        <BottomNavigationAction
          icon={<Menu />}
          label={t('navigation.menu')}
          onClick={() => isNavDrawerOpenVar(!isNavDrawerOpen)}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
