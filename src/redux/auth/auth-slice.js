import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: handlePending,
    [signUp.rejected]: handleRejected,
    [signUp.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
