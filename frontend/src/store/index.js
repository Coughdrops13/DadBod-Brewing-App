import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user-slice';
import beersReducer from './beer-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    beers: beersReducer,
  }
});

export default store;