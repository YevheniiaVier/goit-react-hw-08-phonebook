import { createAsyncThunk } from '@reduxjs/toolkit';
import { postSignup, postLogin } from 'services/auth-api';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const result = await postSignup(user);
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
  async (user, { rejectWithValue }) => {
    try {
      const result = await postLogin(user);
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
