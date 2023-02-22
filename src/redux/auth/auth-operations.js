import { createAsyncThunk } from '@reduxjs/toolkit';
import { postSignup } from 'services/auth-api';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const result = await postSignup(user);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
