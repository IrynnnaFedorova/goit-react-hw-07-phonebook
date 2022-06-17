import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAPI } from 'services';

// ! Операции - используют actions внутри себя: request, success, error,

// ! операция добавления контакта

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAddContact',
  data => {
    return fetchAPI.fetchSendData(data);
  },
);

// ! операция удаления контакта

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDeleteContact',
  id => {
    return fetchAPI.fetchDeleteById(id);
  },
);

// ! операция получения всего списка контактов

export const fetchGetAllContacts = createAsyncThunk(
  'contacts/fetchGetAllContacts',
  () => {
    return fetchAPI.fetchAllItems();
  },
);
