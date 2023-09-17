import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { useAboveBreakpoint, useIsDesktop } from '../../hooks/common.hooks';
import BottomNav from '../Navigation/BottomNav';
import LeftNav from '../Navigation/LeftNav';
import NavDrawer from '../Navigation/NavDrawer';
import ScrollToTop from '../Navigation/ScrollToTop';
import TopNav from '../Navigation/TopNav';
import Toast from '../Shared/Toast';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
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
          {children}

          <Toast />
          {isDesktop && <ScrollToTop />}
        </main>
      </Container>
    </>
  );
};

export default Layout;
