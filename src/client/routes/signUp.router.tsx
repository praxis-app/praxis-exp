import { RouteObject } from 'react-router-dom';
import SignUp from '../pages/Auth/SignUp';

const signUpRouter: RouteObject = {
  path: '/signup',
  children: [
    {
      path: '',
      element: <SignUp />,
    },
    {
      path: ':token',
      element: <SignUp />,
    },
  ],
};

export default signUpRouter;
