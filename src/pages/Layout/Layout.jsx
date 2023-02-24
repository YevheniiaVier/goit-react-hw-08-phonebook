import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from 'components/MainNav/MainNav';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <MainNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
