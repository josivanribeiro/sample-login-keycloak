import React from 'react';
import { Redirect } from 'react-router-dom';
import keycloak from './keycloak';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return keycloak.authenticated ? (
    <Component {...rest} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
