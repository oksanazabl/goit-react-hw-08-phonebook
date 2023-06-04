import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import  Layout  from './Layout/Layout';
import  PrivateRoute  from '../routs/PrivateRoute/PrivateRoute';
import  RestrictedRoute  from '../routs/RestrictedRoute/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { fetchContacts } from 'redux/contacts/operations';
import { selectUser } from 'redux/auth/selectors';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { isLoggedIn, isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
    if (isLoggedIn && !isRefreshing) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <RestrictedRoute
          path="/register"
          component={RegisterPage}
          restricted={true}
          redirectTo="/contacts"
        />
        <RestrictedRoute
          path="/login"
          component={LoginPage}
          restricted={true}
          redirectTo="/contacts"
        />

        {/* Private Route */}
        <PrivateRoute
          path="/contacts"
          component={ContactsPage}
          redirectTo="/login"
          isLoggedIn={isLoggedIn}
        />
      </Routes>
    </Layout>
  );
}

export default App;
