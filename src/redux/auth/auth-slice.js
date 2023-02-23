import { createSlice } from '@reduxjs/toolkit';
import { signUp, login, logout, getCurrentUser } from './auth-operations';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

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
        console.log('slicefulfilled', state);

        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        console.log('slicerejected', state);
        return state;
      });
    builder
      .addCase(logout.pending, (state, action) => state)
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => state);
    builder
      .addCase(getCurrentUser.pending, (state, action) => state)
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        // state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => state);
  },
});

export const authReducer = authSlice.reducer;

// extraReducers: {
//   [signUp.pending]: handlePending,
//   [signUp.rejected]: handleRejected,
//   [login.pending]: handlePending,
//   [login.rejected]: handleRejected,
//   [logout.pending]: handlePending,
//   [logout.rejected]: handleRejected,
//   [getCurrentUser.pending]: handlePending,
//   [getCurrentUser.rejected]: handleRejected,
//   [signUp.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = null;
//     state.user = payload.user;
//     state.token = payload.token;
//     state.isLoggedIn = true;
//   },
//   [login.fulfilled](state, { payload }) {
// state.isLoading = false;
// state.error = null;
// state.user = payload.user;
// state.token = payload.token;
// state.isLoggedIn = true;
//   },
//   [logout.fulfilled](state) {
// state.isLoading = false;
// state.error = null;
// // state.user = {};
// // state.token = '';
// state.isLoggedIn = false;
//   },
//   [getCurrentUser.fulfilled](state, { payload }) {
// state.isLoading = false;
// state.error = null;
// state.user = payload.user;
// state.token = payload.token;
// state.isLoggedIn = false;
//   },
// },
