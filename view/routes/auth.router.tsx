import { RouteObject } from 'react-router-dom';
import Login from '../components/Pages/Auth/Login';
import SignUp from '../components/Pages/Auth/SignUp';

const authRouter: RouteObject = {
  path: '/auth',
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
    {
      path: 'signup/:token',
      element: <SignUp />,
    },
  ],
};

export default authRouter;
