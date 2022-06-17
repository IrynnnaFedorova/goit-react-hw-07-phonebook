import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';

import { contactReducer } from './contacts/items/items-reducer';
import { filterReducer } from './contacts/filter/filter-reducer';

const contactsListReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

// прослойки, которые проходит action перед тем как попасть в reducer
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsListReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
