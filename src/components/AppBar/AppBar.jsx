import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import useAuth from '../../hook/useAuth';
import css from './AppBar.module.css';


const AppBar = () => {
    const { isLoggedIn } = useAuth();
  return (
    <div className={css.app_bar}>
       <Navigation/>
      {isLoggedIn ? <UserMenu /> : <NavigationLink />}
    </div>
  );
};

export default AppBar;