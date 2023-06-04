import React from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css'

const Layout = () => {
    return <div className={css.layout}>
     <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>;
};

export default Layout;
