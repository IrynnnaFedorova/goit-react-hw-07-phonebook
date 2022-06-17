import { createReducer } from '@reduxjs/toolkit';
import {
  fetchDeleteContact,
  fetchAddContact,
  fetchGetAllContacts,
} from './items-operations';

export const contactReducer = createReducer([], {
  [fetchAddContact.fulfilled]: (state, { payload }) => [...state, payload],

  [fetchDeleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),

  [fetchGetAllContacts.fulfilled]: (_, { payload }) => payload,
});
