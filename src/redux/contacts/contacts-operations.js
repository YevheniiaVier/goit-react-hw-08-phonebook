import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getContacts,
  postContact,
  deleteContact,
  patchContact,
} from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContacts();
      return response;
    } catch ({ response, message }) {
      const error = {
        status: response.status,
        message: message,
      };
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await postContact(contact);
      return response;
    } catch ({ response, message }) {
      const error = {
        status: response.status,
        message: message,
      };
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/delete',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await deleteContact(contact);
      return response;
    } catch ({ response, message }) {
      const error = {
        status: response.status,
        message: message,
      };
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, { rejectWithValue }) => {
    console.log(contact, 'editcontact in operations');

    try {
      const response = await patchContact(contact);
      console.log('edit contact in patch', contact);
      return response;
    } catch ({ response, message }) {
      const error = {
        status: response.status,
        message: message,
      };
      return rejectWithValue(error);
    }
  }
);
