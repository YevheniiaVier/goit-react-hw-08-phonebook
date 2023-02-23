import { createSlice } from '@reduxjs/toolkit';
import { signUp, login, logout, refreshUser } from './auth-operations';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, (state, action) => state)
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => state);
    builder
      .addCase(login.pending, (state, action) => state)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        console.log('token', payload.token);
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        return state;
      });
    builder
      .addCase(logout.pending, (state, action) => state)
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => state);
    builder
      .addCase(refreshUser.pending, (state, action) => state)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        // state.token = null;
        return state;
      });
  },
});

export const authReducer = authSlice.reducer;
