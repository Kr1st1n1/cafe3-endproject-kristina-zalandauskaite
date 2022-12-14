import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { authClearRedirect } from '../store/auth/auth-actions';

const RequireVisitor = ({ children: Page }) => {
  const { loggedIn, redirect, dispatch } = useAuth();

  if (loggedIn) {
    if (redirect) {
      dispatch(authClearRedirect);

      return <Navigate to={redirect} />;
    }

    return <Navigate to="/shop" />;
  }

  return Page;
};

export default RequireVisitor;
