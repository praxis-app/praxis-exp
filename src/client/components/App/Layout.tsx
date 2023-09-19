import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAboveBreakpoint, useIsDesktop } from '../../hooks/shared.hooks';
import BottomNav from '../Navigation/BottomNav';
import LeftNav from '../Navigation/LeftNav';
import NavDrawer from '../Navigation/NavDrawer';
import ScrollToTop from '../Navigation/ScrollToTop';
import TopNav from '../Navigation/TopNav';
import Toast from '../Shared/Toast';

const Layout = () => {
  const isDesktop = useIsDesktop();
  const isLarge = useAboveBreakpoint('lg');

  return (
    <>
      <TopNav />
      <NavDrawer />
      {!isLarge && <BottomNav />}
      {isLarge && <LeftNav />}

      <Container maxWidth="sm">
        <main role="main">
          <Outlet />
          <Toast />
          {isDesktop && <ScrollToTop />}
        </main>
      </Container>
    </>
  );
};

export default Layout;
