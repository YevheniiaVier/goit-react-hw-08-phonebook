import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  postSignup,
  postLogin,
  postLogout,
  getUser,
  setAuthHeader,
  clearAuthHeader,
} from 'services/auth-api';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await postSignup(credentials);
      setAuthHeader(result.token);
      return result;
    } catch ({ response, message }) {
      const error = {
        status: response.status,
        message: message,
      };
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await postLogin(credentials);
      console.log('login token', result.token);
      setAuthHeader(result.token);
      return result;
    } catch ({ response, message }) {
      const error = {
        status: response.status,
        message: message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await postLogout();
      clearAuthHeader();
      return result;
    } catch ({ response, message }) {
      const error = {
        status: response.status,
        message: message,
      };
      return rejectWithValue(error);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;

    if (!token) {
      return rejectWithValue('token is not valid');
    }

    try {
      const result = await getUser(token);
      return result;
    } catch ({ response, message }) {
      const error = {
        status: response.status,
        message: message,
      };
      return rejectWithValue(error);
    }
  }
);
