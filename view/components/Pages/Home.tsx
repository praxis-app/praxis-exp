import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../../apollo/cache';
import PublicGroupsFeed from '../Groups/PublicGroupsFeed';
import HomeFeed from '../Users/HomeFeed';

const Home = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  if (!isLoggedIn) {
    return <PublicGroupsFeed />;
  }
  return <HomeFeed />;
};

export default Home;
