import { RouteObject } from 'react-router-dom';
import EditPost from '../components/Pages/Posts/EditPost';
import PostPage from '../components/Pages/Posts/PostPage';

const postsRouter: RouteObject = {
  path: '/posts',
  children: [
    {
      path: ':id',
      element: <PostPage />,
    },
    {
      path: ':id/edit',
      element: <EditPost />,
    },
  ],
};

export default postsRouter;
