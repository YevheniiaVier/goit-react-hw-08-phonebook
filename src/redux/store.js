import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contacts-slice';
import { filterReducer } from './filter/filter-slice';
import { themeReducer } from './theme/theme-slice';
import { authReducer } from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});
