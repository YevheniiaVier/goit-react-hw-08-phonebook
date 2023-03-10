import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
const Layout = lazy(() => import('pages/Layout/Layout'));

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotExistingPage = lazy(() =>
  import('pages/NotExistingPage/NotExistingPage')
);

export const UserRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotExistingPage />} />
      </Routes>
    </Suspense>
  );
};
