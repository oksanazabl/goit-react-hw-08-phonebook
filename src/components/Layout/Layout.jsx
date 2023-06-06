import React from 'react';
import Navigation from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container'
import css from './Layout.module.css';

const Layout = () => {
  return (
    <Container>
      <div className={css.header}>
        <Navigation />
      </div>
      <div className={css.page}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default Layout;
