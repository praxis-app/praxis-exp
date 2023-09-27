import { RouteObject } from 'react-router-dom';
import EditEvent from '../pages/Events/EditEvent';
import PostPage from '../pages/Posts/PostPage';
import EditPost from '../pages/Posts/EditPost';

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
