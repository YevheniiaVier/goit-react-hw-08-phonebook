import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
  editContact,
} from './contacts-operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, { payload }) => state)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => state);
    builder
      .addCase(addContact.pending, (state, action) => state)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        return state;
      });
    builder
      .addCase(removeContact.pending, (state, action) => state)
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload?.id
        );
        state.items.splice(index, 1);
      })
      .addCase(removeContact.rejected, (state, action) => {
        return state;
      });
    builder
      .addCase(editContact.pending, (state, action) => state)
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        console.log(payload, 'payload in edit');
        console.log(state, 'state in edit');
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1, payload);
      })
      .addCase(editContact.rejected, (state, action) => {
        return state;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
