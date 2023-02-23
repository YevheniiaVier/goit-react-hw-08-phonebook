import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from 'components/MainNav/MainNav';
import { Navigate } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <MainNav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
