import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user-slice';
import beersReducer from './beer-slice';
import mailingListReducer from './mailingList-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    beers: beersReducer,
    mailingList: mailingListReducer,
  }
});

export default store;