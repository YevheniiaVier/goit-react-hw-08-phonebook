import { UserRoutes } from 'UserRoutes';
import React, { useEffect } from 'react';
import { theme, darkTheme, GlobalStyles } from 'theme';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';

import { selectTheme } from 'redux/theme/theme-selectors';
import { refreshUser } from 'redux/auth/auth-operations';

import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const activeTheme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={activeTheme === 'theme' ? theme : darkTheme}>
      <GlobalStyles />
      <Container>{!isRefreshing && <UserRoutes />}</Container>
    </ThemeProvider>
  );
};
