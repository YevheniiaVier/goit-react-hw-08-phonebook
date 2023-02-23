import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

const PhonebookPage = lazy(() => import('pages/PhonebookPage/PhonebookPage'));
const FavoriteContactsPage = lazy(() =>
  import('pages/FavoriteContactsPage/FavoriteContactsPage')
);
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
        <Route path="/" element={<PhonebookPage />}>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/favorite-contacts" element={<FavoriteContactsPage />} />
        </Route>
        <Route path="*" element={<NotExistingPage />} />
      </Routes>
    </Suspense>
  );
};
