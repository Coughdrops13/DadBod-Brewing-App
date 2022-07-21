import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user-slice';
import beersReducer from './beer-slice';
import loggedInReducer from './loggedIn-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    beers: beersReducer,
    loggedIn: loggedInReducer,
  }
});

export default store;