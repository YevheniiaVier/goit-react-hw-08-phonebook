import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from 'components/MainNav/MainNav';

const PhonebookPage = () => {
  return (
    <>
      <p>Home</p>
      <MainNav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default PhonebookPage;
