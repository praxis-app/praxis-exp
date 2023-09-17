import { useReactiveVar } from '@apollo/client';
import React, { useEffect } from 'react';
import { isLoggedInVar } from '../../apollo/cache';
import LoginForm from '../../components/Auth/LoginForm';
import ProgressBar from '../../components/Shared/ProgressBar';

const Login = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    if (isLoggedIn) {
      console.log('TODO: Add redirect to home page');
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <ProgressBar />;
  }

  return <LoginForm />;
};

export default Login;