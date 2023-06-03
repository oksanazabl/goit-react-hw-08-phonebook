import React from 'react';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({
  component: Component,
  //   restricted,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
