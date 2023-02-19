import { UserRoutes } from 'UserRoutes';
import React from 'react';
import { theme, darkTheme, GlobalStyles } from 'theme';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/theme-selectors';
import { MainNav } from 'components/MainNav/MainNav';

import { Container } from './App.styled';

export const App = () => {
  const activeTheme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={activeTheme === 'theme' ? theme : darkTheme}>
      <GlobalStyles />
      <Container>
        <MainNav />
        <UserRoutes />
      </Container>
    </ThemeProvider>
  );
};
