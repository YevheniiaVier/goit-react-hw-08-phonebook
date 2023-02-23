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
      setAuthHeader(result.token);
      console.log('login-operation', result);
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

export const getCurrentUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getUser();
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
