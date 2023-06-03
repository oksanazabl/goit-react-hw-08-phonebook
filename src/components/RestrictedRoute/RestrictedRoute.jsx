import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({
  component: Component,
  restricted,
  redirectTo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        restricted ? <Redirect to={redirectTo} /> : <Component {...props} />
      }
    />
  );
};

export default RestrictedRoute;
